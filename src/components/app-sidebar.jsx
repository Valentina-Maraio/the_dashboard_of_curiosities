import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { CalendarDemo } from "./calendar-demo"


// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Solcial",
      url: "#",
      items: [
        {
          title: "Twitter",
          url: "#",
        }
      ],
    },
    {
      title: "People",
      url: "#",
      items: [
        {
          title: "Kamala Harris",
          url: "#",
        },
        {
          title: "Joe Biden",
          url: "#",
        },
        {
          title: "Donald Tramp",
          url: "#",
        },
        {
          title: "Alexandria Ocasio-Cortez",
          url: "#",
        },
      ],
    },
    {
      title: "Architecture",
      url: "#",
      items: [
        {
          title: "Voter Demographics",
          url: "#",
        },
        {
          title: "Key Issues",
          url: "#",
        },
        {
          title: "Political Campaigns",
          url: "#",
        },
        {
          title: "Media & Social Media Sentiment",
          url: "#",
        },
        {
          title: "Polling Data",
          url: "#",
        },
        {
          title: "Electoral Dynamics",
          url: "#",
        },
        {
          title: "PArty Dynamics",
          url: "#",
        },
        {
          title: "Debates PErformance",
          url: "#",
        },
        {
          title: "Historical Context",
          url: "#",
        },
        {
          title: "Technology and Data",
          url: "#",
        },
        {
          title: "Economica Indicators",
          url: "#",
        },
        {
          title: "Local / Regional Issues",
          url: "#",
        },
        {
          title: "Election Integrity",
          url: "#",
        },
        {
          title: "Post-Election Implications",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>)
  );
}
