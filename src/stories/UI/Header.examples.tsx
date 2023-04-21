import Header from "../../components/Header/Header";

export const BasicHeader = () => {
  return (
    <Header>
      <nav>
        <a
          href="/finder"
          style={{
            textDecoration: "none",
          }}
        >
          Content
        </a>
        <a
          href="/finder"
          style={{
            textDecoration: "none",
          }}
        >
          Media
        </a>
        <a
          href="/admin"
          style={{
            textDecoration: "none",
          }}
        >
          Settings
        </a>
      </nav>
    </Header>
  );
};
