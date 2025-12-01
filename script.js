function copyIP() {
    const ipField = document.getElementById("server-ip");
    ipField.select();
    ipField.setSelectionRange(0, 999);
    navigator.clipboard.writeText(ipField.value);

    alert("Server IP copied to clipboard!");
}
