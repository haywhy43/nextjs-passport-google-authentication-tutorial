import Link from "next/link";

const LoginPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem" }}>Login with Google</h1>
      <Link href="/api/login" passHref>
        <button
          style={{
            border: "1px solid black",
            backgroundColor: "white",
            borderRadius: "10px",
            height: "50px",
            width: "200px",
            cursor: "pointer",
          }}
        >
          Proceed
        </button>
      </Link>
    </div>
  );
};

export default LoginPage;
