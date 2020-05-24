# Colab Alive - Chrome Extension

![logo](logo.png)

---

Helps in automatically reconnecting the colab session if disconnected, also prevents the idle timeout by clicking the colab-connect-button

## How to use this extension

1. clone this repository: https://github.com/satyajitghana/colab-keepalive

2. go to `chrome://extensions/`

3. click on `Load unpacked` and select this folder

4. that's it ! go to https://colab.research.google.com/ , it should automatically work, open `Developer Tools` to see logs

## code that does this magic ✨

```javascript
function ClickConnect() {
    console.log('%c [colab-alive]: connect click - start', 'color:DodgerBlue');
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
    console.log('%c [colab-alive]: connect click - end', 'color: DodgerBlue');
}
```

---

made with 💖 by shadowleaf
