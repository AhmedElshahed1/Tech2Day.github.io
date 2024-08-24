function getQueryStringValue(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const name = decodeURIComponent(getQueryStringValue("name"));
const email = decodeURIComponent(getQueryStringValue("email"));
const mobile = decodeURIComponent(getQueryStringValue("mobile"));
const gender = decodeURIComponent(getQueryStringValue("gender"));
const address = decodeURIComponent(getQueryStringValue("address"));

document.getElementById("userInfo").innerHTML = `
        <p><strong>Hello, ${name}!</strong></p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Address:</strong> ${address}</p>
    `;
