import { useState } from "react";

import { StyledAdminPanel } from "../styles/AdminPanel.styled";
import UsersTab from "./UsersTab";
import PostsTab from "./PostsTab";
import useAuth from "../../../hooks/useAuth";
import ErrorReportsTab from "./ErrorReportsTab";
import CategoriesTab from "./CategoriesTab";

export default function AdminPanel() {
  const [selectedTab, setSelectedTab] = useState("posts");

  const { mainRole } = useAuth();
  const hasUsersTabAccess = mainRole == "Admin";
  const hasErrorReportsTabAccess = mainRole == "Admin";
  const hasCategoriesTabAccess = mainRole == "Admin";

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
            {hasCategoriesTabAccess && (
              <li
                className={selectedTab == "categories" ? "selected" : ""}
                onClick={() => setSelectedTab("categories")}
                aria-selected={selectedTab == "categories" ? true : false}
              >
                Kategorie
              </li>
            )}
            {hasUsersTabAccess && (
              <li
                className={selectedTab == "users" ? "selected" : ""}
                onClick={() => setSelectedTab("users")}
                aria-selected={selectedTab == "users" ? true : false}
              >
                Użytkownicy
              </li>
            )}
            {hasErrorReportsTabAccess && (
              <li
                className={selectedTab == "errorReports" ? "selected" : ""}
                onClick={() => setSelectedTab("errorReports")}
                aria-selected={selectedTab == "errorReports" ? true : false}
              >
                Błędy
              </li>
            )}
          </ul>
        </nav>
        {selectedTab == "users" ? (
          <UsersTab />
        ) : selectedTab == "posts" ? (
          <PostsTab />
        ) : selectedTab == "errorReports" ? (
          <ErrorReportsTab />
        ) : (
          <CategoriesTab />
        )}
      </div>
    </StyledAdminPanel>
  );
}
