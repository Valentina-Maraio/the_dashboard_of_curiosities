import { Search } from "lucide-react"
import { useState } from "react";

import { Label } from "@/components/ui/label"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar"

export function SearchForm() {
  const [name, setName] = useState('');
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!name.trim()) {
      setError("Please enter a username.");
      setTweets([]);
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`/api/twitter?name=${name}`);
      if (!response.ok) {
        throw new Error("Failed to fetch tweets");
      }
      const data = await response.json();
      setTweets(data.data || []);
    } catch (err) {
      setError(err.message);
      setTweets([]);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Enter Twitter username..."
            className="pl-8"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </SidebarGroupContent>
      </SidebarGroup>
      <button
        onClick={handleSearch}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      <ul style={{ marginTop: '20px' }}>
        {tweets.map((tweet) => (
          <li key={tweet.id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
            {tweet.text}
          </li>
        ))}
      </ul>
    </>
  );
}
