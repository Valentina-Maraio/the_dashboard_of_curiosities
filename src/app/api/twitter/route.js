import axios from "axios";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

  if (!name) {
    return new Response(
      JSON.stringify({ error: "Name query parameter is required" }),
      { status: 400 }
    );
  }

  try {
    // Step 1: Fetch user details
    const userResponse = await axios.get(
      `https://api.twitter.com/2/users/by/username/${name}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
      }
    );

    // If user doesn't exist, handle the error
    if (!userResponse.data || !userResponse.data.data) {
      return new Response(
        JSON.stringify({ error: "User not found" }),
        { status: 404 }
      );
    }

    const userId = userResponse.data.data.id;

    // Step 2: Fetch the user's tweets
    const tweetsResponse = await axios.get(
      `https://api.twitter.com/2/users/${userId}/tweets`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
        params: {
          max_results: 10, // Adjust number of tweets to return
        },
      }
    );

    return new Response(
      JSON.stringify({ data: tweetsResponse.data.data || [] }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Twitter API Error:", error.response?.data || error.message);

    // Handling specific error response from Twitter API
    if (error.response?.data?.errors) {
      return new Response(
        JSON.stringify({ error: error.response.data.errors[0].message }),
        { status: error.response?.status || 500 }
      );
    }

    return new Response(
      JSON.stringify({ error: "Failed to fetch data from Twitter API" }),
      { status: 500 }
    );
  }
}
