import React from "react";

function Newsletter(): JSX.Element {
  const handleSubmit = () => {
    window.open(
      "https://tinyletter.com/bhekanik",
      "popupwindow",
      "scrollbars=yes,width=800,height=600"
    );
    return true;
  };
  return (
    <div>
      <form
        style={{
          border: "1px solid #ccc",
          padding: "3px",
          textAlign: "center",
        }}
        action="https://tinyletter.com/bhekanik"
        method="post"
        target="popupwindow"
        onSubmit={handleSubmit}
      >
        <p>
          <label htmlFor="tlemail">Enter your email address</label>
        </p>
        <p>
          <input
            type="text"
            style={{ width: "140px" }}
            name="email"
            id="tlemail"
          />
        </p>
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe" />
        <p>
          <a href="https://tinyletter.com" target="_blank" rel="noreferrer">
            powered by TinyLetter
          </a>
        </p>
      </form>
    </div>
  );
}

export default Newsletter;
