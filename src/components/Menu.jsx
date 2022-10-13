const Menu = () => {
  function twitterClick() {
    try {
      let instElement = document.querySelector(".inst-block");
      instElement.classList.remove("twit-block-active");
    } catch (e) {
      console.log(`Error: ${e}`);
    }
    let twitterElement = document.querySelector(".twit-block");
    twitterElement.classList.add("twit-block-active");
  }

  function instClick() {
    let instElement = document.querySelector(".inst-block");
    try {
      let twitterElement = document.querySelector(".twit-block");
      let instElement = document.querySelector(".inst-block");
      twitterElement.classList.remove("twit-block-active");
      instElement.classList.remove("twit-block-active");
    } catch (e) {
      console.log(`Error: ${e}`);
    }
    instElement.classList.add("twit-block-active");
  }

  function blockClick() {
    try {
      let twitterElement = document.querySelector(".twit-block");
      let instElement = document.querySelector(".inst-block");
      twitterElement.classList.remove("twit-block-active");
      instElement.classList.remove("twit-block-active");
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  }

  return (
    <div className="menu" >
      <div className="logo-block" onClick={blockClick}>
        <img className="logo-pic" src="bat.svg" alt="logo" />
      </div>

      <div className="inst-block menu-block" onClick={instClick}>
        <img className="inst-pic" src="inst.svg" alt="inst" />
      </div>

      <div className="twit-block menu-block" onClick={twitterClick}>
        <img className="twit-pic" src="twit.svg" alt="inst" />
      </div>

      {/* <div className="pref-block">
        <img className="pref-pic" src="pref.svg" alt="inst" />
      </div> */}
    </div>
  );
};
export default Menu;
