const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const script = fs.readFileSync('app.js', 'utf8');

const dom = new JSDOM(html, { runScripts: "outside-only", url: "http://localhost/" });
dom.window.localStorage = {
  store: {},
  getItem(k) { return this.store[k] || null; },
  setItem(k, v) { this.store[k] = v; }
};
dom.window.alert = console.log;

// mock Pyodide
dom.window.loadPyodide = async () => ({});
// mock fetch and CodeMirror
dom.window.fetch = () => Promise.resolve({ json: () => Promise.resolve({ exists: false, success: true }) });
dom.window.CodeMirror = {
    fromTextArea: () => ({
        on: () => {},
        getValue: () => "",
        setValue: () => {},
        refresh: () => {}
    })
};

try {
    dom.window.eval(script);
    dom.window.document.getElementById('roll-input').value = '238U1A0568';
    dom.window.document.getElementById('login-btn').click();
    console.log("Exam screen display:", dom.window.document.getElementById('exam-screen').style.display);
    console.log("Login error display:", dom.window.document.getElementById('login-error').style.display);
    console.log("Login error text:", dom.window.document.getElementById('login-error').textContent);
} catch (e) {
    console.error("ERROR CAUGHT:", e);
}
