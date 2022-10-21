import input from "./store/input";
//Подписки
function followings(name) {
  name = input.value;
  let text = JSON.stringify({
    [name]: { followings: ["@frencis", "@alloha21", "@orlando14", "jackie_j"] },
  });
  downloadAsFile(text);

  function downloadAsFile(data) {
    let a = document.createElement("a");
    let file = new Blob([data], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = "followings.json";
    a.click();
  }
}

//Информация о цели
function info(name) {
  name = input.value;
  let text = JSON.stringify({
    [name]: { info: [name, "+11233741223", "jfjfjs@gmail.com", "NY"] },
  });
  downloadAsFile(text);

  function downloadAsFile(data) {
    let a = document.createElement("a");
    let file = new Blob([data], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = "info.json";
    a.click();
  }
}

//Почты
function emails(name) {
  name = input.value;
  let text = JSON.stringify({
    [name]: {
      emails: [
        { "@jackie123_": "yery@gmail.com" },
        { "@duruiw": "reno17@gmail.com" },
      ],
    },
  });
  downloadAsFile(text);

  function downloadAsFile(data) {
    let a = document.createElement("a");
    let file = new Blob([data], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = "emails.json";
    a.click();
  }
}

//Номера телефонов
function tels(name) {
  name = input.value;
  let text = JSON.stringify({
    [name]: {
      tels: [{ "@jackie123_": "+11233214523" }, { "@duruiw": "+1885993939" }],
    },
  });
  downloadAsFile(text);

  function downloadAsFile(data) {
    let a = document.createElement("a");
    let file = new Blob([data], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = "numbers.json";
    a.click();
  }
}

//followers
function followers(name) {
  name = input.value;
  let text = JSON.stringify({
    [name]: { followers: ["@frencis", "@alloha21", "@orlando14", "jackie_j"] },
  });
  downloadAsFile(text);

  function downloadAsFile(data) {
    let a = document.createElement("a");
    let file = new Blob([data], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = "followers.json";
    a.click();
  }
}

//Download photos
function downloadAllPhotos() {
  let text = JSON.stringify({ photo: "reference" });
  downloadAsFile(text);

  function downloadAsFile(data) {
    let a = document.createElement("a");
    let file = new Blob([data], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = "photos.txt";
    a.click();
  }
}

//addrs
function addrs(name) {
  name = input.value;
  let text = JSON.stringify({
    [name]: {
      addrs: [{ "@frencis": "NY, locs, 21" }, { "@alloha21": "NY, gori, 111" }],
    },
  });
  downloadAsFile(text);

  function downloadAsFile(data) {
    let a = document.createElement("a");
    let file = new Blob([data], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = "addrs.json";
    a.click();
  }
}

//stories
function stories() {
  let text = JSON.stringify({ stories: "references" });
  downloadAsFile(text);

  function downloadAsFile(data) {
    let a = document.createElement("a");
    let file = new Blob([data], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = "stories.txt";
    a.click();
  }
}

//Отметили
function tagged(name) {

  name = input.value;
  let text = JSON.stringify({
    [name]: {
      tagged: ['@kira_kiro', '@evgen121rus', '@jesqwq'],
    },
  });
  downloadAsFile(text);

  function downloadAsFile(data) {
    let a = document.createElement("a");
    let file = new Blob([data], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = "tagged.json";
    a.click();
  }
}

export default {
  followers,
  followings,
  info,
  addrs,
  tagged,
  downloadAllPhotos,
  stories,
  tels,
  emails,
};
