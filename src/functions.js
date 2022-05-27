const $ = document.querySelector.bind(document);
var sig = "appCompat";

export function fetchData() {
  try {
  const input = document.getElementById("input").value;
  const username = document.getElementById("input").value;
  document.querySelector("#username").innerHTML = username;
  fetch("https://aviateapp.eu.org/api/" + input)
    .then((res) => res.json())
    .then((data) => {
      const { status } = data;
      try {
      document.getElementById("amotd").innerText = "Aviate Status: " + status}
      catch (error) {
        return;
      }
    });
  fetch("https://my-ocular.jeffalo.net/api/user/" + input)
    .then((res) => res.json())
    .then((data) => {
      const { status } = data;
      document.getElementById("motd").innerText = status;
    });
  document.querySelector("#username").innerText = input;
  fetch("https://scratchdb.lefty.one/v3/forum/user/info/" + input)
    .then((res) => res.json())
    .then((data) => {
      const counts = data.counts;
      const total = data.counts.total.count;
      const sig = data.signature;
      let keys = Object.keys(counts).reverse();
      keys.pop();
      let mostPostedForum = "N/A";
      let mostPostedForumCount = 0;
      for (let i = 0; i < keys.length; i++) {
        if (counts[keys[i]].count > mostPostedForumCount) {
          mostPostedForum = keys[i];
          mostPostedForumCount = counts[keys[i]].count;
        }
        const pfp = document.querySelector("#pfp");
        document.querySelector("#signature").innerHTML = sig;
        document.querySelector("#topForum").innerText = mostPostedForum;
        document.querySelector("#totalPosts").innerText = total;
        const img =
          "https://my-ocular.jeffalo.net/api/user/" + input + "/picture";
        pfp.src = img;
      }
    });
  } catch (error) {
    return;
  }
}
export default fetchData;
