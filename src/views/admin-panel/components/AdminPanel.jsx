import { useState } from "react";

import { StyledAdminPanel } from "../styles/AdminPanel.styled";
import UsersTab from "./UsersTab";
import PostsTab from "./PostsTab";
import useAuth from "../../../hooks/useAuth";

export default function AdminPanel() {
  const [selectedTab, setSelectedTab] = useState("posts");

  const { mainRole } = useAuth();
  const hasUsersTabAccess = mainRole == "Admin";

  return (
    <StyledAdminPanel>
      <div>
        <nav>
          <ul>
            <li
              className={selectedTab == "posts" ? "selected" : ""}
              onClick={() => setSelectedTab("posts")}
              aria-selected={selectedTab == "selected" ? true : false}
            >
              Posty
            </li>
            {hasUsersTabAccess && (
              <li
                className={selectedTab == "users" ? "selected" : ""}
                onClick={() => setSelectedTab("users")}
                aria-selected={selectedTab == "users" ? true : false}
              >
                Użytkownicy
              </li>
            )}
          </ul>
        </nav>
        {selectedTab == "users" ? <UsersTab /> : <PostsTab />}
      </div>
    </StyledAdminPanel>
  );
}
