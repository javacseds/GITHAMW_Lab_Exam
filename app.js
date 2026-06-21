// ═══════════════════════════════════════════════════════
//  ALL 25 QUESTIONS
// ═══════════════════════════════════════════════════════
const questions = [
  { no: 1, title: "Sum of List Numbers",
    statement: "Write a Python program to find the sum of all numbers in a given list.",
    inputFormat: ["First line contains an integer N, representing the number of elements.", "Second line contains N space-separated integers."],
    outputFormat: ["Print the sum of all elements."],
    constraints: ["1 ≤ N ≤ 100", "-1000 ≤ Element ≤ 1000"],
    samples: [{ input: "5\n10 20 30 40 50", output: "150" }] },
  { no: 2, title: "Reverse the String",
    statement: "Write a Python program to reverse the given string.",
    inputFormat: ["A single string."],
    outputFormat: ["Print the reversed string."],
    constraints: ["Length ≤ 100"],
    samples: [{ input: "Python", output: "nohtyP" }] },
  { no: 3, title: "Count the Characters in a String",
    statement: "Write a program to count the total number of characters in a string including spaces.",
    inputFormat: ["A single string."],
    outputFormat: ["Print the total number of characters."],
    constraints: [],
    samples: [{ input: "Python", output: "6" }] },
  { no: 4, title: "Palindrome of String",
    statement: "Write a program to check whether the given string is a palindrome.",
    inputFormat: ["A string."],
    outputFormat: ["Print \"Palindrome\" if the string reads the same backward as forward, otherwise print \"Not Palindrome\"."],
    constraints: [],
    samples: [{ input: "madam", output: "Palindrome" }] },
  { no: 5, title: "Convert Lowercase to Uppercase",
    statement: "Write a Python program to convert all lowercase letters into uppercase.",
    inputFormat: ["A string."],
    outputFormat: ["Print the converted string."],
    constraints: [],
    samples: [{ input: "python", output: "PYTHON" }] },
  { no: 6, title: "Count the Number of Words",
    statement: "Write a Python program to count the number of words in a sentence.",
    inputFormat: ["A sentence."],
    outputFormat: ["Print the total number of words."],
    constraints: [],
    samples: [{ input: "Python is easy to learn", output: "5" }] },
  { no: 7, title: "Alternate Character Removal",
    statement: "Write a Python program to remove every alternate character from a given string, starting from the second character (index 1).",
    inputFormat: ["A single string."],
    outputFormat: ["Print the modified string after removing alternate characters."],
    constraints: ["1 ≤ Length of string ≤ 100"],
    samples: [{ input: "Python", output: "Pto" }] },
  { no: 8, title: "Character Frequency Winner",
    statement: "Write a Python program to find the character that appears the maximum number of times in a string. If multiple characters have the same highest frequency, print the character that appears first.",
    inputFormat: ["A single string."],
    outputFormat: ["Print the character with the highest frequency."],
    constraints: ["1 ≤ Length ≤ 100"],
    samples: [{ input: "banana", output: "a" }] },
  { no: 9, title: "Mirror Word Check",
    statement: "Write a Python program to check whether the first half of a string is the mirror (reverse) of the second half.",
    inputFormat: ["A single string of even length."],
    outputFormat: ["Print \"Mirror Word\" if the first half is the reverse of the second half, otherwise print \"Not Mirror Word\"."],
    constraints: ["String length is even."],
    samples: [{ input: "abba", output: "Mirror Word" }] },
  { no: 10, title: "Word Weight Calculator",
    statement: "Each word's weight is equal to the number of characters present in it. Write a Python program to display every word along with its weight.",
    inputFormat: ["A sentence."],
    outputFormat: ["Print each word followed by its weight."],
    constraints: [],
    samples: [{ input: "Python is easy", output: "Python : 6\nis : 2\neasy : 4" }] },
  { no: 11, title: "Special Character Filter",
    statement: "Write a Python program to extract and print only the special characters from a given string.",
    inputFormat: ["A single string containing alphabets, digits and special characters."],
    outputFormat: ["Print only the special characters."],
    constraints: ["Length ≤ 100"],
    samples: [{ input: "abc123@#$", output: "@#$" }] },
  { no: 12, title: "Find the Largest Number",
    statement: "Write a Python program to find the largest element in a given list of integers.",
    inputFormat: ["First line contains an integer N, representing the number of elements.", "Second line contains N space-separated integers."],
    outputFormat: ["Print the largest element."],
    constraints: ["1 ≤ N ≤ 100", "-1000 ≤ Element ≤ 1000"],
    samples: [{ input: "5\n12 45 8 67 23", output: "67" }] },
  { no: 13, title: "Sum of Elements",
    statement: "Write a Python program to calculate the sum of all elements in a list.",
    inputFormat: ["First line contains N.", "Second line contains N integers."],
    outputFormat: ["Print the sum."],
    constraints: ["1 ≤ N ≤ 100"],
    samples: [{ input: "5\n10 20 30 40 50", output: "150" }] },
  { no: 14, title: "Print Only Even Numbers",
    statement: "Write a Python program to print only the even numbers from a list.",
    inputFormat: ["First line contains N.", "Second line contains N integers."],
    outputFormat: ["Print all even numbers separated by spaces."],
    constraints: ["1 ≤ N ≤ 100"],
    samples: [{ input: "6\n10 15 20 25 30 35", output: "10 20 30" }] },
  { no: 15, title: "Count of Even and Odd Numbers",
    statement: "Write a Python program to count the number of even and odd elements in a list.",
    inputFormat: ["First line contains N.", "Second line contains N integers."],
    outputFormat: ["Print:\nEven Count : X\nOdd Count : Y"],
    constraints: ["1 ≤ N ≤ 100"],
    samples: [{ input: "6\n1 2 3 4 5 6", output: "Even Count : 3\nOdd Count : 3" }] },
  { no: 16, title: "Reverse the Elements",
    statement: "Write a Python program to print the elements of a list in reverse order.",
    inputFormat: ["First line contains N.", "Second line contains N integers."],
    outputFormat: ["Print the list in reverse order."],
    constraints: ["1 ≤ N ≤ 100"],
    samples: [{ input: "5\n10 20 30 40 50", output: "50 40 30 20 10" }] },
  { no: 17, title: "Sum of Positive and Negative Numbers",
    statement: "Write a Python program to calculate the sum of positive numbers and the sum of negative numbers separately.",
    inputFormat: ["First line contains N.", "Second line contains N integers."],
    outputFormat: ["Print:\nPositive Sum : X\nNegative Sum : Y"],
    constraints: ["Elements may be positive, negative, or zero."],
    samples: [{ input: "6\n10 -5 20 -15 30 -10", output: "Positive Sum : 60\nNegative Sum : -30" }] },
  { no: 18, title: "Count and Sum of Positive and Negative Numbers",
    statement: "Write a Python program to count and calculate the sum of positive and negative numbers separately.",
    inputFormat: ["First line contains N.", "Second line contains N integers."],
    outputFormat: ["Print:\nPositive Count : X\nNegative Count : Y\nPositive Sum : A\nNegative Sum : B"],
    constraints: ["1 ≤ N ≤ 100"],
    samples: [{ input: "7\n10 -5 15 -20 25 -30 40", output: "Positive Count : 4\nNegative Count : 3\nPositive Sum : 90\nNegative Sum : -55" }] },
  { no: 19, title: "Count the Numbers in a String",
    statement: "Write a Python program to count the total number of numeric digits present in a given string.",
    inputFormat: ["A single string containing alphabets, digits, and special characters."],
    outputFormat: ["Print the total number of digits."],
    constraints: ["1 ≤ Length of string ≤ 100"],
    samples: [{ input: "abc123xyz45", output: "5" }] },
  { no: 20, title: "Count the Special Characters in a String",
    statement: "Write a Python program to count the number of special characters in a given string.",
    inputFormat: ["A single string."],
    outputFormat: ["Print the total number of special characters."],
    constraints: ["Consider characters other than alphabets and digits as special characters."],
    samples: [{ input: "abc123@#$", output: "3" }] },
  { no: 21, title: "Remove Duplicate Characters",
    statement: "Write a Python program to remove duplicate characters from a string while preserving the order of their first occurrence.",
    inputFormat: ["A single string."],
    outputFormat: ["Print the string after removing duplicate characters."],
    constraints: ["1 ≤ Length ≤ 100"],
    samples: [{ input: "programming", output: "progamin" }] },
  { no: 22, title: "Convert Lowercase to Uppercase (Without upper())",
    statement: "Write a Python program to convert all lowercase letters in a string to uppercase without using the built-in upper() function.",
    inputFormat: ["A single string."],
    outputFormat: ["Print the converted string."],
    constraints: ["Do not use upper()."],
    samples: [{ input: "python", output: "PYTHON" }] },
  { no: 23, title: "Toggle Case",
    statement: "Write a Python program to convert uppercase letters to lowercase and lowercase letters to uppercase, without using the built-in swapcase() function.",
    inputFormat: ["A single string."],
    outputFormat: ["Print the toggled string."],
    constraints: ["Do not use swapcase()."],
    samples: [{ input: "PyThOn", output: "pYtHoN" }, { input: "Hello123", output: "hELLO123" }] },
  { no: 24, title: "Replace Space with Hyphen",
    statement: "Write a Python program to replace every space in a sentence with a hyphen (-).",
    inputFormat: ["A sentence."],
    outputFormat: ["Print the modified sentence."],
    constraints: ["Preserve all non-space characters."],
    samples: [{ input: "Python is easy", output: "Python-is-easy" }] },
  { no: 25, title: "Reverse Each Word in a Sentence",
    statement: "Write a Python program to reverse each word in a sentence while maintaining the original word order.",
    inputFormat: ["A sentence."],
    outputFormat: ["Print the sentence with each word reversed."],
    constraints: ["Words are separated by a single space."],
    samples: [{ input: "Python is easy", output: "nohtyP si ysae" }] }
];

// ═══════════════════════════════════════════════════════
//  STUDENT ROSTER (54 students)
// ═══════════════════════════════════════════════════════
const students = [
  { name: "Anjali",                    roll: "238U1A0568", branch: "B.Tech CSE" },
  { name: "Krishna",                   roll: "238U1A0593", branch: "B.Tech CSE" },
  { name: "Suri Snehanjali",           roll: "238U1A0507", branch: "B.Tech CSE" },
  { name: "Kunta Samatha",             roll: "238U1A0412", branch: "B.Tech CSE" },
  { name: "Lakshmi Bantrothu",         roll: "238U1A0504", branch: "B.Tech CSE" },
  { name: "Pravallika",                roll: "238U1A0505", branch: "B.Tech CSE" },
  { name: "Rajoli",                    roll: "238U1A0573", branch: "B.Tech CSE" },
  { name: "Gaswetha",                  roll: "238U1A0565", branch: "B.Tech CSE" },
  { name: "Dharamani",                 roll: "238U1A0595", branch: "B.Tech CSE" },
  { name: "Chitha",                    roll: "238U1A0533", branch: "B.Tech CSE" },
  { name: "Kalyani",                   roll: "238U1A0509", branch: "B.Tech CSE" },
  { name: "Suvaneswari",               roll: "238U1A0569", branch: "B.Tech CSE" },
  { name: "Jyothika Reddy",            roll: "238U1A0576", branch: "B.Tech CSE" },
  { name: "Lakshmi Devi Pollakati",    roll: "238U1A0566", branch: "B.Tech CSE" },
  { name: "Pravallika",                roll: "238U1A0574", branch: "B.Tech CSE" },
  { name: "Mukkamalla",                roll: "238U1A0554", branch: "B.Tech CSE" },
  { name: "Keerthana",                 roll: "238U1A0547", branch: "B.Tech CSE" },
  { name: "Priya",                     roll: "238U1A0522", branch: "B.Tech CSE" },
  { name: "Jainabi",                   roll: "238U1A0527", branch: "B.Tech CSE" },
  { name: "Yesha",                     roll: "238U1A0559", branch: "B.Tech CSE" },
  { name: "Hemalatha",                 roll: "238U1A0510", branch: "B.Tech CSE" },
  { name: "Pending Name (238U1A3307)", roll: "238U1A3307", branch: "B.Tech CSE" },
  { name: "Pending Name (238U1A0528)", roll: "238U1A0528", branch: "B.Tech CSE" },
  { name: "Lakshminarasamma",          roll: "238U1A0536", branch: "B.Tech CSE" },
  { name: "Param Archana",             roll: "238U1A0544", branch: "B.Tech CSE" },
  { name: "Keerthana Jinka",           roll: "238U1A0535", branch: "B.Tech CSE" },
  { name: "Pranaya Sri",               roll: "238U1A0555", branch: "B.Tech CSE" },
  { name: "Varshitha",                 roll: "238U1A0513", branch: "B.Tech CSE" },
  { name: "Yannam",                    roll: "238U1A0592", branch: "B.Tech CSE" },
  { name: "Devi",                      roll: "238U1A0515", branch: "B.Tech CSE" },
  { name: "Sneha",                     roll: "238U1A0583", branch: "B.Tech CSE" },
  { name: "Chandrika",                 roll: "238U1A0585", branch: "B.Tech CSE" },
  { name: "Bhumika Rama Bhumika",      roll: "238U1A3310", branch: "B.Tech CSE AIML" },
  { name: "Hitha Pathipati",           roll: "238U1A3319", branch: "B.Tech CSE AIML" },
  { name: "Machupalle",                roll: "238U1A0421", branch: "B.Tech ECE" },
  { name: "Swami Golla",               roll: "238U1A0413", branch: "B.Tech ECE" },
  { name: "Pooja",                     roll: "238U1A0415", branch: "B.Tech ECE" },
  { name: "Mamatha",                   roll: "238U1A0443", branch: "B.Tech ECE" },
  { name: "Manasa",                    roll: "238U1A0416", branch: "B.Tech ECE" },
  { name: "Navya Sree",                roll: "238U1A0434", branch: "B.Tech ECE" },
  { name: "Hemalatha",                 roll: "238U1A0417", branch: "B.Tech ECE" },
  { name: "Dadana",                    roll: "238U1A0428", branch: "B.Tech ECE" },
  { name: "Venkata Siri",              roll: "248U5A0404", branch: "B.Tech ECE" },
  { name: "Bukke",                     roll: "238U1A0403", branch: "B.Tech ECE" },
  { name: "Bellamkondu",               roll: "238U1A0402", branch: "B.Tech ECE" },
  { name: "Dara",                      roll: "238U1A0408", branch: "B.Tech ECE" },
  { name: "Bhargavi",                  roll: "248U5A0411", branch: "B.Tech ECE" },
  { name: "Gaddam",                    roll: "238U1A0411", branch: "B.Tech ECE" },
  { name: "Sree Koneti",               roll: "238U1A0419", branch: "B.Tech ECE" },
  { name: "Pending Name (248U5A0206)", roll: "248U5A0206", branch: "B.Tech" },
  { name: "Pending Name (248U5A0208)", roll: "248U5A0208", branch: "B.Tech" },
  { name: "Pending Name (248U5A0207)", roll: "248U5A0207", branch: "B.Tech" },
  { name: "Pending Name (248U5A0209)", roll: "248U5A0209", branch: "B.Tech" },
  { name: "Pending Name (238U1A0440)", roll: "238U1A0440", branch: "B.Tech" }
];

// Helper function to compare execution output and expected output robustly
function compareOutput(actual, expected, qTitle = "") {
  if (typeof actual !== 'string' || typeof expected !== 'string') return false;
  
  const clean = (str) => {
    return str
      .toLowerCase()
      // Replace colons, equal signs, and commas with space
      .replace(/[:=,]/g, ' ')
      // Normalize all white spaces (including newlines and tabs) to a single space
      .replace(/\s+/g, ' ')
      .trim();
  };

  const normActual = clean(actual);
  const normExpected = clean(expected);
  
  if (normActual === normExpected) return true;

  // Lenient fallback for character/string manipulation questions (like Toggle Case)
  // If the student correctly swapped all letters but dropped digits/special characters
  if (qTitle && (qTitle.toLowerCase().includes("toggle") || qTitle.toLowerCase().includes("uppercase") || qTitle.toLowerCase().includes("lowercase"))) {
      const lettersOnly = (str) => str.replace(/[^a-zA-Z]/g, '');
      if (lettersOnly(actual) === lettersOnly(expected) && lettersOnly(actual).length > 0) {
          return true;
      }
  }

  // Fallback: Line-by-line clean comparison
  const actualLines = actual.split('\n').map(l => clean(l)).filter(Boolean);
  const expectedLines = expected.split('\n').map(l => clean(l)).filter(Boolean);
  if (actualLines.length === expectedLines.length) {
    let allMatch = true;
    for (let i = 0; i < expectedLines.length; i++) {
      if (actualLines[i] !== expectedLines[i]) {
        allMatch = false;
        break;
      }
    }
    if (allMatch) return true;
  }

  // Token-based fallback (ignores punctuation, case, and extra words, compares word/number sequence)
  const getTokens = (str) => {
    return str.toLowerCase().match(/[a-z0-9\-]+/g) || [];
  };
  const actualTokens = getTokens(actual);
  const expectedTokens = getTokens(expected);
  if (actualTokens.length > 0 && actualTokens.length === expectedTokens.length) {
    let allTokensMatch = true;
    for (let i = 0; i < expectedTokens.length; i++) {
      if (actualTokens[i] !== expectedTokens[i]) {
        allTokensMatch = false;
        break;
      }
    }
    if (allTokensMatch) return true;
  }

  return false;
}

function seededShuffle(arr, seed) {
  const a = arr.slice();
  let s = seed >>> 0;
  for (let i = a.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getStudentQuestions(studentIdx) {
  // Build a unique-set registry (runs once, cached for the session)
  if (!window._questionRegistry) {
    window._questionRegistry = {};
    const totalStudents = students.length;
    
    // Pre-assign unique question sets for ALL students at once
    const usedSets = new Set();
    
    for (let idx = 0; idx < totalStudents; idx++) {
      let attempt = 0;
      let chosen;
      
      while (true) {
        // Generate a seed unique to this student + attempt
        const seed = (0xCAFEBABE ^ ((idx + attempt * 997) * 8191 + 54321)) >>> 0;
        const allIdxs = [...Array(questions.length).keys()];
        const shuffled = seededShuffle(allIdxs, seed);
        chosen = shuffled.slice(0, 5);
        
        // Create a sorted key to detect duplicate sets (order doesn't matter for uniqueness)
        const key = chosen.slice().sort((a, b) => a - b).join(',');
        
        if (!usedSets.has(key)) {
          usedSets.add(key);
          break;
        }
        attempt++;
        // Safety: with C(25,5) = 53130 combinations, this will always find a unique set
        if (attempt > 10000) break;
      }
      
      window._questionRegistry[idx] = chosen;
    }
    
    console.log(`✅ Assigned unique question sets to ${totalStudents} students (${usedSets.size} unique sets)`);
  }
  
  return window._questionRegistry[studentIdx] || [0, 1, 2, 3, 4];
}


function getApiBase() {
    return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:' || !window.location.hostname
      ? 'http://localhost:3000' 
      : '';
}
let API_BASE = getApiBase();

function deriveDeptAndSection(branch, roll) {
  let dept = "CSE";
  let bName = "CSE";
  let sec = "A";
  
  if (branch) {
      const lowerBranch = branch.toLowerCase();
      if (lowerBranch.includes("cse")) {
          dept = "CSE";
          bName = "CSE";
          if (lowerBranch.includes("aiml")) {
              bName = "CSE AIML";
          }
      } else if (lowerBranch.includes("ece")) {
          dept = "ECE";
          bName = "ECE";
      } else {
          dept = branch;
          bName = branch;
      }
  }
  
  if (roll) {
      const match = roll.match(/\d+$/);
      if (match) {
          const num = parseInt(match[0]);
          if (num > 60) {
              sec = "B";
          } else {
              sec = "A";
          }
      }
  }
  return { department: dept, branch: bName, section: sec };
}

async function fetchWithRetry(url, options = {}, retries = 5, delay = 1000) {
  let loaderTextEl = document.querySelector('.loader-text');
  const oldText = loaderTextEl ? loaderTextEl.textContent : "Auto-Grading in Progress...";
  for (let i = 0; i < retries; i++) {
      try {
          const res = await fetch(url, options);
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          const data = await res.json();
          if (!data.success) throw new Error(data.error || 'Server returned success: false');
          if (loaderTextEl) loaderTextEl.textContent = oldText;
          return data;
      } catch (err) {
          console.warn(`[Retry] Attempt ${i + 1} failed:`, err);
          if (i === retries - 1) {
              if (loaderTextEl) loaderTextEl.textContent = oldText;
              throw err;
          }
          if (loaderTextEl) {
              loaderTextEl.textContent = `Submission failed. Retrying...`;
          }
          await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
      }
  }
}

// ═══════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════
const EXAM_DURATION = 2.5 * 60 * 60; // 2h30m in seconds
let timerInterval = null;
let secondsLeft = EXAM_DURATION;
let currentStudent = null;
let assignedQIdxs = []; // 5 question indices for this student
let currentTab = 0;     // which of the 5 questions is shown
let codes = ['', '', '', '', '']; // saved code per question
let stdins = ['', '', '', '', ''];
let attempted = [false, false, false, false, false]; // has user typed code?
let passed = [false, false, false, false, false];
let questionSubmitted = [false, false, false, false, false];
let examStartTime = null;
let tabSwitches = 0;


const studentMap = {};

let customStudents = JSON.parse(localStorage.getItem('custom_students') || '[]');
students.push(...customStudents);

students.forEach((s, i) => { studentMap[s.roll] = { ...s, idx: i }; });

// Apply any saved Admin edits from localStorage
let savedOverrides = JSON.parse(localStorage.getItem('student_overrides') || '{}');
students.forEach((s) => {
    if (savedOverrides[s.roll]) {
        s.name = savedOverrides[s.roll].name;
        s.branch = savedOverrides[s.roll].branch;
        let newRoll = savedOverrides[s.roll].newRoll;
        if (newRoll && newRoll !== s.roll) {
            // Update mapping for the new roll number
            let sIdx = studentMap[s.roll].idx;
            delete studentMap[s.roll];
            s.roll = newRoll;
            studentMap[newRoll] = { ...s, idx: sIdx };
        }
    }
});
// Rebuild studentMap just to be absolutely safe after edits
Object.keys(studentMap).forEach(k => delete studentMap[k]);
students.forEach((s, i) => { studentMap[s.roll] = { ...s, idx: i }; });


// ═══════════════════════════════════════════════════════
//  LOGIN
// ═══════════════════════════════════════════════════════
const loginScreen    = document.getElementById('login-screen');
const examScreen     = document.getElementById('exam-screen');
const timeoutScreen  = document.getElementById('timeout-screen');
const submittedScreen= document.getElementById('submitted-screen');
const rollInput      = document.getElementById('roll-input');
const loginError     = document.getElementById('login-error');


window.switchLoginTab = function(tab) {
    document.getElementById('tab-student').classList.remove('active');
    document.getElementById('tab-admin').classList.remove('active');
    document.getElementById('login-student-view').style.display = 'none';
    document.getElementById('login-admin-view').style.display = 'none';
    
    if (tab === 'student') {
        document.getElementById('tab-student').classList.add('active');
        document.getElementById('login-student-view').style.display = 'block';
    } else {
        document.getElementById('tab-admin').classList.add('active');
        document.getElementById('login-admin-view').style.display = 'block';
    }
};

let adminSseSource = null;

function initAdminSSE() {
    if (adminSseSource) {
        adminSseSource.close();
    }
    const sseUrl = `${API_BASE}/api/results/live`;
    console.log(`[SSE] Connecting to ${sseUrl}...`);
    adminSseSource = new EventSource(sseUrl);
    
    adminSseSource.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            if (data && (data.type === 'UPDATE' || data.type === 'ACTIVITY')) {
                console.log(`[SSE] Received ${data.type} event. Re-rendering admin dashboard...`);
                renderAdmin(false); // Refetches live results from database
                if (window.renderActivityTimeline) {
                    window.renderActivityTimeline();
                }
            }
        } catch (err) {
            console.error("[SSE] Error parsing SSE message:", err);
        }
    };
    
    adminSseSource.onerror = (err) => {
        console.error("[SSE] Connection error. Reconnecting in 5s...", err);
        adminSseSource.close();
        setTimeout(initAdminSSE, 5000);
    };
}

function startAdminPolling(intervalMs) {
    if (window.adminInterval) clearInterval(window.adminInterval);
    if (intervalMs > 0) {
        window.adminInterval = setInterval(renderAdmin, intervalMs);
    }
}

document.getElementById('admin-login-btn').addEventListener('click', () => {
    const pwd = document.getElementById('admin-password-input').value;
    const correctPwd = localStorage.getItem('admin_password') || 'ADMIN123';
    if (pwd === correctPwd || pwd === 'ADMIN') {
        document.getElementById('admin-login-error').style.display = 'none';
        loginScreen.style.display = 'none';
        document.getElementById('admin-screen').style.display = 'flex';
        initAdminSSE();
        renderAdmin();
        
        const refreshSelect = document.getElementById('admin-refresh-interval');
        const savedInterval = localStorage.getItem('admin_refresh_interval');
        const intervalVal = savedInterval !== null ? parseInt(savedInterval) : 60000; // Default to 1 Min (60000)
        
        if (refreshSelect) {
            refreshSelect.value = intervalVal.toString();
        }
        startAdminPolling(intervalVal);
    } else {
        document.getElementById('admin-login-error').style.display = 'block';
    }
});

document.getElementById('admin-password-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('admin-login-btn').click();
});

// --- DYNAMIC REBUILD MODALS ---
window.rebuildAddStudentModal = function() {
    const modal = document.getElementById('add-student-modal');
    if (!modal) return;
    modal.innerHTML = `
      <div class="modal-card" style="max-width: 500px; background:#1b2e45; border:1px solid rgba(255,255,255,0.15); border-radius:16px; padding:30px; max-height: 90vh; overflow-y: auto;">
          <h3 style="margin-bottom:15px; color:var(--text); font-size:20px;">Add New Student</h3>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; text-align: left;">
              <div style="grid-column: span 2; margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Roll Number (Hall Ticket)</label>
                  <input type="text" id="add-roll-input" placeholder="e.g. 238U1A0422" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; font-family:'Space Mono',monospace; outline:none;">
              </div>
              <div style="grid-column: span 2; margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Student Name</label>
                  <input type="text" id="add-name-input" placeholder="Enter Full Name" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
              </div>
              <div style="margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Department</label>
                  <input type="text" id="add-dept-input" placeholder="e.g. CSE" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
              </div>
              <div style="margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Branch</label>
                  <input type="text" id="add-branch-input" placeholder="e.g. B.Tech CSE" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
              </div>
              <div style="margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Section</label>
                  <input type="text" id="add-sec-input" placeholder="e.g. A" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
              </div>
              <div style="margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Semester</label>
                  <input type="text" id="add-semester-input" placeholder="e.g. Semester 1" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
              </div>
              <div style="margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Academic Year</label>
                  <input type="text" id="add-year-input" placeholder="e.g. 2025-2026" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
              </div>
              <div style="margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Mobile Number</label>
                  <input type="text" id="add-mobile-input" placeholder="Enter 10 digits" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
              </div>
              <div style="grid-column: span 2; margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Email Address</label>
                  <input type="email" id="add-email-input" placeholder="student@example.com" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
              </div>
              <div style="grid-column: span 2; margin-bottom: 15px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Exam Permission</label>
                  <select id="add-permission-input" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
                      <option value="Allowed">Allowed</option>
                      <option value="Blocked">Blocked</option>
                  </select>
              </div>
          </div>
          
          <div class="modal-btns" style="margin-top: 15px;">
              <button class="modal-cancel" id="close-add-btn">Cancel</button>
              <button class="modal-confirm" id="save-add-btn" style="background:#10b981; color:#fff;">Add Student</button>
          </div>
      </div>
    `;
    
    document.getElementById('close-add-btn').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    document.getElementById('save-add-btn').addEventListener('click', handleSaveAddStudent);
};

window.rebuildEditStudentModal = function() {
    const modal = document.getElementById('edit-student-modal');
    if (!modal) return;
    modal.innerHTML = `
      <div class="modal-card" style="max-width: 500px; background:#1b2e45; border:1px solid rgba(255,255,255,0.15); border-radius:16px; padding:30px; max-height: 90vh; overflow-y: auto;">
          <h3 style="margin-bottom:15px; color:var(--text); font-size:20px;">Edit Student Details</h3>
          <input type="hidden" id="edit-original-roll">
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; text-align: left;">
              <div style="grid-column: span 2; margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Roll Number (Hall Ticket)</label>
                  <input type="text" id="edit-roll-input" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; font-family:'Space Mono',monospace; outline:none;">
              </div>
              <div style="grid-column: span 2; margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Student Name</label>
                  <input type="text" id="edit-name-input" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
              </div>
              <div style="margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Department</label>
                  <input type="text" id="edit-dept-input" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
              </div>
              <div style="margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Branch</label>
                  <input type="text" id="edit-branch-input" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
              </div>
              <div style="margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Section</label>
                  <input type="text" id="edit-sec-input" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
              </div>
              <div style="margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Semester</label>
                  <input type="text" id="edit-semester-input" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
              </div>
              <div style="margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Academic Year</label>
                  <input type="text" id="edit-year-input" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
              </div>
              <div style="margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Mobile Number</label>
                  <input type="text" id="edit-mobile-input" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
              </div>
              <div style="grid-column: span 2; margin-bottom: 8px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Email Address</label>
                  <input type="email" id="edit-email-input" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
              </div>
              <div style="grid-column: span 2; margin-bottom: 15px;">
                  <label style="display:block; margin-bottom:5px; font-size:12px; color:var(--muted);">Exam Permission</label>
                  <select id="edit-permission-input" style="width:100%; padding:10px; background:var(--navy3); border:1px solid var(--border); color:var(--text); border-radius:6px; outline:none;">
                      <option value="Allowed">Allowed</option>
                      <option value="Blocked">Blocked</option>
                  </select>
              </div>
          </div>
          
          <div class="modal-btns" style="margin-top: 15px;">
              <button class="modal-cancel" id="close-edit-btn">Cancel</button>
              <button class="modal-confirm" id="save-edit-btn" style="background:var(--blue-light); color:var(--navy);">Save Changes</button>
          </div>
      </div>
    `;
    
    document.getElementById('close-edit-btn').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    document.getElementById('save-edit-btn').addEventListener('click', handleSaveEditStudent);
};

async function handleSaveAddStudent() {
    const roll = document.getElementById('add-roll-input').value.trim().toUpperCase();
    const name = document.getElementById('add-name-input').value.trim();
    const dept = document.getElementById('add-dept-input').value.trim();
    const branch = document.getElementById('add-branch-input').value.trim();
    const section = document.getElementById('add-sec-input').value.trim();
    const semester = document.getElementById('add-semester-input').value.trim();
    const academicYear = document.getElementById('add-year-input').value.trim();
    const mobileNumber = document.getElementById('add-mobile-input').value.trim();
    const email = document.getElementById('add-email-input').value.trim();
    const examPermission = document.getElementById('add-permission-input').value;
    
    if (!roll) {
        alert("Roll Number (Hall Ticket) is required.");
        return;
    }
    
    if (studentMap[roll]) {
        alert("A student with this Roll Number already exists!");
        return;
    }
    
    const newStudent = { 
        name, roll, branch, department: dept, section, semester, academicYear, mobileNumber, email, examPermission,
        status: "Not Started", marks: 0, attempts: 0
    };
    
    students.push(newStudent);
    studentMap[roll] = { ...newStudent, idx: students.length - 1 };
    
    let customStudents = JSON.parse(localStorage.getItem('custom_students') || '[]');
    customStudents.push(newStudent);
    localStorage.setItem('custom_students', JSON.stringify(customStudents));
    
    let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
    results[roll] = {
        roll, name, branch, department: dept, section, semester, academicYear, mobileNumber, email, examPermission,
        status: "Not Started", marks: 0, attempts: 0
    };
    localStorage.setItem('assessment_results', JSON.stringify(results));
    
    try {
        await fetch(`${API_BASE}/api/results`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(results[roll])
        });
    } catch (e) {
        console.error("Failed to sync new student to DB:", e);
    }
    
    document.getElementById('add-student-modal').classList.remove('active');
    renderAdmin();
}

async function handleSaveEditStudent() {
    const originalRoll = document.getElementById('edit-original-roll').value;
    const roll = document.getElementById('edit-roll-input').value.trim().toUpperCase();
    const name = document.getElementById('edit-name-input').value.trim();
    const dept = document.getElementById('edit-dept-input').value.trim();
    const branch = document.getElementById('edit-branch-input').value.trim();
    const section = document.getElementById('edit-sec-input').value.trim();
    const semester = document.getElementById('edit-semester-input').value.trim();
    const academicYear = document.getElementById('edit-year-input').value.trim();
    const mobileNumber = document.getElementById('edit-mobile-input').value.trim();
    const email = document.getElementById('edit-email-input').value.trim();
    const examPermission = document.getElementById('edit-permission-input').value;
    
    if (!roll) {
        alert("Roll Number (Hall Ticket) is required.");
        return;
    }
    
    if (roll !== originalRoll && studentMap[roll]) {
        alert("A student with the new Roll Number already exists!");
        return;
    }
    
    const studentIdx = students.findIndex(s => s.roll === originalRoll);
    let student = students[studentIdx];
    if (student) {
        student.roll = roll;
        student.name = name;
        student.branch = branch;
        student.department = dept;
        student.section = section;
        student.semester = semester;
        student.academic_year = academicYear;
        student.mobile_number = mobileNumber;
        student.email = email;
        student.exam_permission = examPermission;
    }
    
    if (roll !== originalRoll) {
        studentMap[roll] = studentMap[originalRoll];
        delete studentMap[originalRoll];
    }
    if (studentMap[roll]) {
        studentMap[roll].roll = roll;
        studentMap[roll].name = name;
        studentMap[roll].branch = branch;
        studentMap[roll].department = dept;
        studentMap[roll].section = section;
        studentMap[roll].semester = semester;
        studentMap[roll].academic_year = academicYear;
        studentMap[roll].mobile_number = mobileNumber;
        studentMap[roll].email = email;
        studentMap[roll].exam_permission = examPermission;
    }
    
    let customStudents = JSON.parse(localStorage.getItem('custom_students') || '[]');
    const customIdx = customStudents.findIndex(s => s.roll === originalRoll);
    if (customIdx !== -1) {
        customStudents[customIdx] = { name, roll, branch, department: dept, section, semester, academicYear, mobileNumber, email, examPermission };
        localStorage.setItem('custom_students', JSON.stringify(customStudents));
    }
    
    let overrides = JSON.parse(localStorage.getItem('student_overrides') || '{}');
    overrides[originalRoll] = { name, branch, newRoll: roll, department: dept, section, semester, academicYear, mobileNumber, email, examPermission };
    localStorage.setItem('student_overrides', JSON.stringify(overrides));
    
    let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
    let studentRes = results[originalRoll] || {};
    studentRes = {
        ...studentRes,
        roll, name, branch, department: dept, section, semester, academicYear, mobileNumber, email, examPermission
    };
    
    if (roll !== originalRoll) {
        results[roll] = studentRes;
        delete results[originalRoll];
    } else {
        results[roll] = studentRes;
    }
    localStorage.setItem('assessment_results', JSON.stringify(results));
    
    try {
        if (roll !== originalRoll) {
            await fetch(`${API_BASE}/api/results/${originalRoll}`, { method: 'DELETE' });
        }
        await fetch(`${API_BASE}/api/results`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(studentRes)
        });
    } catch (e) {
        console.error("Failed to sync edited student to database:", e);
    }
    
    document.getElementById('edit-student-modal').classList.remove('active');
    renderAdmin();
}

window.openEditStudent = function(roll) {
    const student = students.find(s => s.roll === roll);
    let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
    const res = results[roll] || {};
    
    const branchName = student ? student.branch : res.branch;
    const derived = deriveDeptAndSection(branchName, roll);
    
    document.getElementById('edit-original-roll').value = roll;
    document.getElementById('edit-roll-input').value = roll;
    document.getElementById('edit-name-input').value = res.name !== undefined ? res.name : (student ? student.name : '');
    document.getElementById('edit-dept-input').value = res.department !== undefined ? res.department : (student && student.department ? student.department : derived.department);
    document.getElementById('edit-branch-input').value = res.branch !== undefined ? res.branch : (student ? student.branch : '');
    document.getElementById('edit-sec-input').value = res.section !== undefined ? res.section : (student && student.section ? student.section : derived.section);
    document.getElementById('edit-semester-input').value = res.semester !== undefined ? res.semester : (student && student.semester ? student.semester : '');
    
    const yearVal = res.academicYear !== undefined ? res.academicYear : (res.academic_year !== undefined ? res.academic_year : (student && (student.academicYear || student.academic_year) ? (student.academicYear || student.academic_year) : ''));
    document.getElementById('edit-year-input').value = yearVal;
    
    const mobileVal = res.mobileNumber !== undefined ? res.mobileNumber : (res.mobile_number !== undefined ? res.mobile_number : (student && (student.mobileNumber || student.mobile_number) ? (student.mobileNumber || student.mobile_number) : ''));
    document.getElementById('edit-mobile-input').value = mobileVal;
    
    document.getElementById('edit-email-input').value = res.email !== undefined ? res.email : (student && student.email ? student.email : '');
    document.getElementById('edit-permission-input').value = res.examPermission || res.exam_permission || (student && student.exam_permission) || 'Allowed';
    
    document.getElementById('edit-student-modal').classList.add('active');
};

window.toggleExamPermission = async function(roll) {
    let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
    const currentPermission = (results[roll] && (results[roll].examPermission || results[roll].exam_permission)) || 'Allowed';
    const nextPermission = currentPermission === 'Allowed' ? 'Blocked' : 'Allowed';
    
    if (!results[roll]) results[roll] = { roll };
    results[roll].examPermission = nextPermission;
    results[roll].exam_permission = nextPermission;
    localStorage.setItem('assessment_results', JSON.stringify(results));
    
    const student = students.find(s => s.roll === roll);
    if (student) {
        student.exam_permission = nextPermission;
    }
    
    try {
        await fetch(`${API_BASE}/api/results`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                roll,
                examPermission: nextPermission
            })
        });
        console.log(`Successfully toggled exam permission for ${roll} to ${nextPermission}`);
    } catch (e) {
        console.error("Failed to toggle exam permission in database:", e);
    }
    
    renderAdmin();
};

window.deleteStudent = async function(roll) {
    if (confirm("Are you sure you want to delete student " + roll + " completely? This will erase their details and score.")) {
        const idx = students.findIndex(s => s.roll === roll);
        if (idx !== -1) students.splice(idx, 1);
        delete studentMap[roll];
        
        students.forEach((s, i) => { studentMap[s.roll].idx = i; });
        
        let customStudents = JSON.parse(localStorage.getItem('custom_students') || '[]');
        customStudents = customStudents.filter(s => s.roll !== roll);
        localStorage.setItem('custom_students', JSON.stringify(customStudents));
        
        let overrides = JSON.parse(localStorage.getItem('student_overrides') || '{}');
        delete overrides[roll];
        localStorage.setItem('student_overrides', JSON.stringify(overrides));
        
        let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
        delete results[roll];
        localStorage.setItem('assessment_results', JSON.stringify(results));
        
        try {
            await fetch(`${API_BASE}/api/results/${roll}`, { method: 'DELETE' });
        } catch (e) {
            console.error("Failed to delete student from database:", e);
        }
        
        renderAdmin();
    }
};

window.logStudentActivity = async function(roll, eventType, details = '', questionNo = null) {
    if (!roll) return;
    
    let device = '';
    let browser = '';
    if (eventType === 'LOGIN') {
        const ua = navigator.userAgent;
        if (/mobile/i.test(ua)) device = 'Mobile Device';
        else if (/ipad|tablet/i.test(ua)) device = 'Tablet';
        else device = 'Desktop';

        if (/chrome|crios/i.test(ua)) browser = 'Chrome';
        else if (/firefox|fxios/i.test(ua)) browser = 'Firefox';
        else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = 'Safari';
        else if (/opr/i.test(ua)) browser = 'Opera';
        else if (/edg/i.test(ua)) browser = 'Edge';
        else browser = 'Browser';
    }

    const payload = {
        roll,
        eventType,
        details,
        device,
        browser,
        questionNo
    };

    try {
        await fetch(`${API_BASE}/api/activities`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } catch (e) {
        console.error("Failed to log activity:", e);
    }
};

async function attemptLogin() {
  const roll = rollInput.value.trim().toUpperCase();
  if (!roll) return;
  
  if (roll === 'ADMIN') {
    loginError.style.display = 'none';
    loginScreen.style.display = 'none';
    document.getElementById('admin-screen').style.display = 'flex';
    initAdminSSE();
    renderAdmin();
    
    const refreshSelect = document.getElementById('admin-refresh-interval');
    const savedInterval = localStorage.getItem('admin_refresh_interval');
    const intervalVal = savedInterval !== null ? parseInt(savedInterval) : 60000; // Default to 1 Min (60000)
    
    if (refreshSelect) {
        refreshSelect.value = intervalVal.toString();
    }
    startAdminPolling(intervalVal);
    return;
  }

  const globalConfig = JSON.parse(localStorage.getItem('admin_config') || '{"examOpen":true}');
  if (!globalConfig.examOpen) {
      loginError.textContent = "⚠ The exam has not started yet or is currently closed.";
      loginError.style.display = 'block';
      rollInput.focus();
      return;
  }

  const loginBtn = document.getElementById('login-btn');
  const originalBtnText = loginBtn.textContent;
  loginBtn.textContent = "Verifying...";
  loginBtn.disabled = true;

  try {
      const res = await fetch(`${API_BASE}/api/results/${roll}`);
      if (!res.ok) throw new Error("HTTP error " + res.status);
      const data = await res.json();
      
      if (!data.exists) {
          loginError.textContent = "Hall Ticket Number is not registered. Please contact the Administrator.";
          loginError.style.display = 'block';
          rollInput.focus();
          loginBtn.textContent = originalBtnText;
          loginBtn.disabled = false;
          return;
      }
      
      const liveData = data.data;
      
      const permission = liveData.examPermission || liveData.exam_permission || "Allowed";
      if (permission === "Blocked") {
          loginError.textContent = "You are currently not authorized to attend this examination. Please contact the Administrator.";
          loginError.style.display = 'block';
          rollInput.focus();
          loginBtn.textContent = originalBtnText;
          loginBtn.disabled = false;
          return;
      }

      if (liveData.status === "ABSENT") {
          loginError.textContent = "⚠ Exam has been deactivated for this student (Marked Absent).";
          loginError.style.display = 'block';
          rollInput.focus();
          loginBtn.textContent = originalBtnText;
          loginBtn.disabled = false;
          return;
      }
      if (liveData.status === "SUBMITTED") {
          loginError.textContent = "⚠ This student has already submitted the exam.";
          loginError.style.display = 'block';
          rollInput.focus();
          loginBtn.textContent = originalBtnText;
          loginBtn.disabled = false;
          return;
      }
      if (liveData.status === "ACTIVE" || liveData.status === "IDLE") {
          loginError.textContent = "⚠ Student already logged in. Multiple device logins are not allowed.";
          loginError.style.display = 'block';
          rollInput.focus();
          loginBtn.textContent = originalBtnText;
          loginBtn.disabled = false;
          return;
      }

      let student = studentMap[roll];
      if (!student) {
          student = {
              roll: liveData.roll,
              name: liveData.name || "",
              branch: liveData.branch || "",
              department: liveData.department || "",
              section: liveData.section || "",
              semester: liveData.semester || "",
              academic_year: liveData.academicYear || liveData.academic_year || "",
              mobile_number: liveData.mobileNumber || liveData.mobile_number || "",
              email: liveData.email || ""
          };
          students.push(student);
          studentMap[roll] = { ...student, idx: students.length - 1 };
      } else {
          if (liveData.name) student.name = liveData.name;
          if (liveData.branch) student.branch = liveData.branch;
      }

      // Merge live database progress into local storage to support resuming on new devices
      let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
      results[roll] = {
          ...results[roll],
          roll: liveData.roll,
          name: liveData.name || student.name,
          branch: liveData.branch || student.branch,
          department: liveData.department || student.department,
          section: liveData.section || student.section,
          semester: liveData.semester || student.semester,
          academicYear: liveData.academicYear || liveData.academic_year || student.academic_year,
          mobileNumber: liveData.mobileNumber || liveData.mobile_number || student.mobile_number,
          email: liveData.email || student.email,
          examPermission: permission,
          status: liveData.status,
          marks: liveData.marks || 0,
          attempts: liveData.attempts || 0,
          tabWarnings: liveData.tabWarnings !== undefined ? liveData.tabWarnings : 0,
          examStartTime: liveData.examStartTime,
          questionDetails: liveData.questionDetails || []
      };
      localStorage.setItem('assessment_results', JSON.stringify(results));

      if (window.logStudentActivity) {
          await logStudentActivity(roll, 'LOGIN');
      }

      loginError.style.display = 'none';
      loginBtn.textContent = originalBtnText;
      loginBtn.disabled = false;
      await startExam(student);
      return;

  } catch(e) {
      console.warn("Live database status check failed. Proceeding in offline/local-storage mode:", e);
      
      const student = studentMap[roll];
      if (!student) {
          loginError.textContent = "Hall Ticket Number is not registered. Please contact the Administrator.";
          loginError.style.display = 'block';
          rollInput.focus();
          loginBtn.textContent = originalBtnText;
          loginBtn.disabled = false;
          return;
      }

      let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
      const resData = results[roll];
      if (resData) {
          const permission = resData.examPermission || resData.exam_permission || student.exam_permission || "Allowed";
          if (permission === "Blocked") {
              loginError.textContent = "You are currently not authorized to attend this examination. Please contact the Administrator.";
              loginError.style.display = 'block';
              rollInput.focus();
              loginBtn.textContent = originalBtnText;
              loginBtn.disabled = false;
              return;
          }
          if (resData.status === "ABSENT") {
              loginError.textContent = "⚠ Exam has been deactivated for this student (Marked Absent).";
              loginError.style.display = 'block';
              rollInput.focus();
              loginBtn.textContent = originalBtnText;
              loginBtn.disabled = false;
              return;
          }
          if (resData.status === "SUBMITTED") {
              loginError.textContent = "⚠ This student has already submitted the exam.";
              loginError.style.display = 'block';
              rollInput.focus();
              loginBtn.textContent = originalBtnText;
              loginBtn.disabled = false;
              return;
          }
          if (resData.status === "ACTIVE" || resData.status === "IDLE") {
              loginError.textContent = "⚠ Student already logged in. Multiple device logins are not allowed.";
              loginError.style.display = 'block';
              rollInput.focus();
              loginBtn.textContent = originalBtnText;
              loginBtn.disabled = false;
              return;
          }
      }

      if (window.logStudentActivity) {
          await logStudentActivity(roll, 'LOGIN');
      }

      loginError.style.display = 'none';
      loginBtn.textContent = originalBtnText;
      loginBtn.disabled = false;
      await startExam(student);
      return;
  }
}

document.getElementById('send-otp-btn').addEventListener('click', async () => {
    const email = document.getElementById('student-email-input').value;
    const student = window.pendingStudentLogin;
    if (!email || !email.includes('@')) {
        document.getElementById('otp-error').textContent = 'Please enter a valid email.';
        document.getElementById('otp-error').style.display = 'block';
        return;
    }
    
    document.getElementById('send-otp-btn').textContent = 'Sending...';
    try {
        const res = await fetch(`${API_BASE}/api/send-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roll: student.roll, email })
        });
        const data = await res.json();
        if (data.success) {
            document.getElementById('otp-error').style.display = 'none';
            document.getElementById('otp-email-step').style.display = 'none';
            document.getElementById('otp-code-step').style.display = 'block';
        } else {
            throw new Error(data.error || 'Failed');
        }
    } catch(e) {
        document.getElementById('otp-error').textContent = e.message || "Failed to connect to server";
        document.getElementById('otp-error').style.display = 'block';
    }
    document.getElementById('send-otp-btn').textContent = 'Send Code';
});

document.getElementById('verify-otp-btn').addEventListener('click', async () => {
    const code = document.getElementById('student-otp-input').value;
    const student = window.pendingStudentLogin;
    if (!code) return;
    
    document.getElementById('verify-otp-btn').textContent = 'Verifying...';
    try {
        const res = await fetch(`${API_BASE}/api/verify-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roll: student.roll, code })
        });
        const data = await res.json();
        if (data.success) {
            document.getElementById('otp-modal').classList.remove('active');
            await startExam(student);
        } else {
            throw new Error(data.error || 'Failed');
        }
    } catch(e) {
        document.getElementById('otp-error').textContent = e.message || "Failed to connect to server";
        document.getElementById('otp-error').style.display = 'block';
    }
    document.getElementById('verify-otp-btn').textContent = 'Verify & Start Exam';
});


document.getElementById('login-btn').addEventListener('click', attemptLogin);
rollInput.addEventListener('keydown', e => { if (e.key === 'Enter') attemptLogin(); });

// ═══════════════════════════════════════════════════════
//  START EXAM
// ═══════════════════════════════════════════════════════
let lastActivityTime = Date.now();

document.getElementById('exam-screen').addEventListener('mousemove', () => { lastActivityTime = Date.now(); });
document.getElementById('exam-screen').addEventListener('keydown', () => { lastActivityTime = Date.now(); });

async function syncStudentHeartbeat() {
    if (!currentStudent) return;
    const now = Date.now();
    const isIdle = (now - lastActivityTime) > 120000;
    const currentStatus = isIdle ? "IDLE" : "ACTIVE";
    
    let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
    if (results[currentStudent.roll] && results[currentStudent.roll].status === "SUBMITTED") {
        if (window.heartbeatInterval) clearInterval(window.heartbeatInterval);
        return;
    }

    const payload = {
        status: currentStatus,
        lastActiveStr: new Date(lastActivityTime).toISOString(),
        lastSyncStr: new Date().toISOString()
    };
    
    if (!results[currentStudent.roll]) results[currentStudent.roll] = {};
    results[currentStudent.roll] = { ...results[currentStudent.roll], ...payload };
    localStorage.setItem('assessment_results', JSON.stringify(results));
    
    try {
        const derived = deriveDeptAndSection(currentStudent.branch, currentStudent.roll);
        await fetch(`${API_BASE}/api/results`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                roll: currentStudent.roll,
                name: currentStudent.name,
                branch: currentStudent.branch,
                department: derived.department,
                section: derived.section,
                studentId: currentStudent.roll,
                examId: 'PYTHON_LAB_2026',
                percentage: 0,
                ...payload
            })
        });
    } catch(e) { console.error("PostgreSQL heartbeat sync failed", e); }
}
async function startExam(student) {
  currentStudent = student;
  assignedQIdxs = getStudentQuestions(student.idx);
  codes   = ['', '', '', '', ''];
  stdins  = ['', '', '', '', ''];
  attempted = [false, false, false, false, false];
  passed = [false, false, false, false, false];
  questionSubmitted = [false, false, false, false, false];
  currentTab = 0;

  // Restore previous progress if it exists in local storage
  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  if (results[student.roll]) {
      const res = results[student.roll];
      if (res.examStartTime) {
          examStartTime = res.examStartTime;
      } else {
          examStartTime = new Date().toISOString();
      }
      if (res.tabWarnings !== undefined) {
          tabSwitches = res.tabWarnings;
      } else {
          tabSwitches = 0;
      }
      if (res.questionDetails && res.questionDetails.length > 0) {
          res.questionDetails.forEach((qd, idx) => {
              codes[idx] = qd.code || '';
              stdins[idx] = qd.stdin || '';
              attempted[idx] = qd.attempted || false;
              passed[idx] = qd.passed || false;
              questionSubmitted[idx] = qd.submitted || false;
          });
      }
  } else {
      examStartTime = new Date().toISOString();
      tabSwitches = 0;
  }

  document.getElementById('header-student').textContent = `${student.name} · ${student.roll}`;

  buildNavTabs();
  renderQuestion(0);

  // Send the initial heartbeat synchronously first to lock the session in the database
  lastActivityTime = Date.now();
  await syncStudentHeartbeat();

  if (window.logStudentActivity) {
      await logStudentActivity(student.roll, 'START_EXAM');
  }

  loginScreen.style.display    = 'none';
  examScreen.style.display     = 'flex';
  window.scrollTo(0, 0);
  
  if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(err => {
          console.warn(`Fullscreen error: ${err.message}`);
      });
  }

  startTimer();
  updateProgress();
  toggleEditorVisibility();

  if (window.heartbeatInterval) clearInterval(window.heartbeatInterval);
  window.heartbeatInterval = setInterval(syncStudentHeartbeat, 30000); // Heartbeat every 30 seconds

  if (window.firebaseSyncInterval) clearInterval(window.firebaseSyncInterval);
  window.firebaseSyncInterval = setInterval(syncProgressToFirebase, 60000); // Progress sync every 60 seconds
}

// ═══════════════════════════════════════════════════════
//  NAV TABS
// ═══════════════════════════════════════════════════════
function buildNavTabs() {
  const nav = document.getElementById('q-nav');
  nav.innerHTML = '';
  assignedQIdxs.forEach((qIdx, i) => {
    const q = questions[qIdx];
    const btn = document.createElement('button');
    let classes = 'q-tab';
    if (i === 0) classes += ' active';
    if (questionSubmitted[i]) {
        if (passed[i]) classes += ' passed';
        else classes += ' failed';
    }
    btn.className = classes;
    btn.id = `tab-${i}`;
    btn.textContent = `Q${i+1}: ${q.title.length > 22 ? q.title.slice(0,20)+'…' : q.title}`;
    btn.addEventListener('click', () => switchTab(i));
    nav.appendChild(btn);
  });
}

function switchTab(i) {
  // save current code/stdin
  if (typeof editor !== 'undefined') { codes[currentTab] = editor.getValue(); } else { codes[currentTab] = ''; }
  stdins[currentTab] = document.getElementById('stdin-input').value;
  autoSaveProgress();
  syncProgressToFirebase();

  // update tab state
  document.getElementById(`tab-${currentTab}`).classList.remove('active');
  currentTab = i;
  let newTab = document.getElementById(`tab-${i}`);
  newTab.classList.add('active');
  if (!questionSubmitted[i]) newTab.classList.add('opened');

  renderQuestion(i);
  // restore code/stdin
  if (typeof editor !== 'undefined') { editor.setValue(codes[i]); } setTimeout(() => editor.refresh(), 10);
  document.getElementById('stdin-input').value  = stdins[i];

  // clear output
  const oc = document.getElementById('output-console');
  oc.textContent = '// Run your code to see output here';
  oc.classList.remove('err-text');
  document.getElementById('output-status').style.display = 'none';

  toggleEditorVisibility();
}

function toggleEditorVisibility() {
    const editorArea = document.querySelector('.editor-area');
    const stdinWrap = document.querySelector('.stdin-wrap');
    const outputWrap = document.querySelector('.output-wrap');
    const editorToolbar = document.querySelector('.editor-toolbar');
    let overlay = document.getElementById('completed-overlay');

    if (questionSubmitted[currentTab]) {
        editorArea.style.display = 'none';
        stdinWrap.style.display = 'none';
        outputWrap.style.display = 'none';
        editorToolbar.style.display = 'none';
        
        if (overlay) {
            overlay.remove();
        }
        
        overlay = document.createElement('div');
        overlay.id = 'completed-overlay';
        overlay.style.cssText = 'display:flex;height:100%;align-items:center;justify-content:center;flex-direction:column;background:var(--navy3);flex:1;border-radius:0 0 12px 0;';
        if (passed[currentTab]) {
            overlay.innerHTML = '<span style="font-size:56px;color:#4ade80;margin-bottom:16px;">✓</span><h2 style="font-size:24px;color:#fff;margin-bottom:10px;">Question Submitted</h2><p style="color:var(--muted);font-size:14px;text-align:center;line-height:1.6;">10 Marks Awarded.<br>The code for this question is now locked.</p>';
        } else {
            overlay.innerHTML = '<span style="font-size:56px;color:#ef4444;margin-bottom:16px;">❌</span><h2 style="font-size:24px;color:#fff;margin-bottom:10px;">Question Submitted</h2><p style="color:var(--muted);font-size:14px;text-align:center;line-height:1.6;">0 Marks Awarded (Incorrect Output).<br>The code for this question is now locked.</p>';
        }
        document.querySelector('.editor-panel').insertBefore(overlay, document.querySelector('.submit-section'));
    } else {
        editorArea.style.display = 'flex';
        stdinWrap.style.display = 'block';
        outputWrap.style.display = 'block';
        editorToolbar.style.display = 'flex';
        if (overlay) {
            overlay.style.display = 'none';
        }
    }
}

// ═══════════════════════════════════════════════════════
//  RENDER QUESTION
// ═══════════════════════════════════════════════════════
function renderQuestion(tabIdx) {
  const qIdx = assignedQIdxs[tabIdx];
  const q = questions[qIdx];

  if (currentStudent && window.logStudentActivity) {
      logStudentActivity(currentStudent.roll, 'OPEN_QUESTION', `Question ${tabIdx + 1}: ${q.title}`, tabIdx + 1);
  }
  const panel = document.getElementById('q-panel');

  let constraintsHtml = '';
  if (q.constraints && q.constraints.length) {
    constraintsHtml = `<div class="q-section">
      <div class="q-section-title">Constraints</div>
      <ul class="q-format-list">${q.constraints.map(c=>`<li>${c}</li>`).join('')}</ul>
    </div>`;
  }

  let samplesHtml = q.samples.map((s, i) => `
    <div class="q-sample">
      <div class="q-sample-title">Sample Test Case ${i+1}</div>
      <div class="q-sample-io">
        <div><div class="q-io-label">Input</div><div class="q-code-block">${escHtml(s.input)}</div></div>
        <div><div class="q-io-label">Output</div><div class="q-code-block">${escHtml(s.output)}</div></div>
      </div>
    </div>`).join('');

    let marksBadge = '<span class="q-marks">10 Marks</span>';
    if (questionSubmitted[tabIdx]) {
        if (passed[tabIdx]) {
            marksBadge = '<span class="q-marks" style="color:#10b981;font-weight:700;">✓ 10 Marks Awarded</span>';
        } else {
            marksBadge = '<span class="q-marks" style="color:var(--red);font-weight:700;">✗ 0 Marks (Incorrect)</span>';
        }
    }
  panel.innerHTML = `
    <div class="q-card-header">
      <span class="q-no-badge">Q${tabIdx+1} of 5 &nbsp;·&nbsp; Problem No. ${q.no}</span>
      ${marksBadge}
    </div>
    <div class="q-inner">
      <h2 class="q-problem-title">${escHtml(q.title)}</h2>
      <p class="q-statement">${escHtml(q.statement)}</p>
      <div class="q-section">
        <div class="q-section-title">Input Format</div>
        <ul class="q-format-list">${q.inputFormat.map(f=>`<li>${escHtml(f)}</li>`).join('')}</ul>
      </div>
      <div class="q-section">
        <div class="q-section-title">Output Format</div>
        <ul class="q-format-list">${q.outputFormat.map(f=>`<li>${escHtml(f)}</li>`).join('')}</ul>
      </div>
      ${constraintsHtml}
      <div class="q-section">
        <div class="q-section-title">Sample Test Case(s)</div>
        ${samplesHtml}
      </div>
    </div>`;
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ═══════════════════════════════════════════════════════
//  TIMER
// ═══════════════════════════════════════════════════════
function startTimer() {
  secondsLeft = EXAM_DURATION;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    secondsLeft--;
    updateTimerDisplay();
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      triggerTimeout();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const h = Math.floor(secondsLeft / 3600);
  const m = Math.floor((secondsLeft % 3600) / 60);
  const s = secondsLeft % 60;
  const display = document.getElementById('timer');
  display.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
  if (secondsLeft <= 600) {
    display.className = 'timer-display danger';
  } else if (secondsLeft <= 1800) {
    display.className = 'timer-display warn';
  } else {
    display.className = 'timer-display';
  }
}

function pad(n) { return String(n).padStart(2, '0'); }


async function terminateExam(type) {
    if (timerInterval) clearInterval(timerInterval);
    if (window.heartbeatInterval) clearInterval(window.heartbeatInterval);
    if (window.firebaseSyncInterval) clearInterval(window.firebaseSyncInterval);

    // Show grading loader
    document.getElementById('loader').classList.remove('hidden');
    document.querySelector('.loader-text').textContent = "Submitting Assessment...";

    saveCurrent();

    let earnedMarks = 0;
    let questionDetails = [];
    let correctCount = 0;
    let wrongCount = 0;

    for (let i = 0; i < 5; i++) {
        let codeToTest = codes[i] ? codes[i].replace(/\t/g, '    ').trim() : '';
        let isAttempted = codeToTest.length > 0;
        let qIdx = assignedQIdxs[i];
        let q = questions[qIdx];

        let isPassed = passed[i] && questionSubmitted[i];
        if (isPassed) {
            earnedMarks += 10;
            correctCount++;
        } else if (questionSubmitted[i]) {
            wrongCount++;
        }

        questionDetails.push({
            no: i + 1,
            qId: q.no,
            title: q.title,
            attempted: isAttempted,
            passed: isPassed,
            submitted: questionSubmitted[i],
            marks: isPassed ? 10 : 0,
            code: codeToTest,
            stdin: stdins[i] || ''
        });
    }

    let timeTaken = EXAM_DURATION - secondsLeft;
    let resultClassification = "Fail";
    if (earnedMarks >= 40) resultClassification = "Excellent";
    else if (earnedMarks >= 30) resultClassification = "Good";
    else resultClassification = "Fail";

    const examEndTime = new Date().toISOString();

    const finalResult = {
        marks: earnedMarks,
        attempts: attempted.filter(Boolean).length,
        status: "SUBMITTED",
        timestamp: new Date().toISOString(),
        questionDetails: questionDetails,
        timeTaken: timeTaken,
        studentId: currentStudent.roll,
        examId: 'PYTHON_LAB_2026',
        percentage: (earnedMarks / 50) * 100,
        correctCount: correctCount,
        wrongCount: wrongCount,
        resultClassification: resultClassification,
        tabWarnings: tabSwitches,
        examStartTime: examStartTime,
        examEndTime: examEndTime,
        submissionType: type
    };

    // Save locally
    let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
    results[currentStudent.roll] = { ...(results[currentStudent.roll] || {}), ...finalResult };
    localStorage.setItem('assessment_results', JSON.stringify(results));

    // Send payload to backend with retry capability
    const derived = deriveDeptAndSection(currentStudent.branch, currentStudent.roll);
    try {
        await fetchWithRetry(`${API_BASE}/api/results`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                roll: currentStudent.roll,
                name: currentStudent.name,
                branch: currentStudent.branch,
                department: derived.department,
                section: derived.section,
                ...finalResult
            })
        });
        console.log("Successfully saved final result to database via API.");
    } catch (e) {
        console.error("Failed to save final result to database via API after retries:", e);
        alert("⚠ SUBMISSION WARNING: Could not connect to Neon DB. Your exam was saved locally, but final verification failed. Please show this to the invigilator.");
    }

    if (currentStudent && window.logStudentActivity) {
        await logStudentActivity(currentStudent.roll, 'EXAM_SUBMITTED', `Type: ${type}`);
    }

    document.getElementById('loader').classList.add('hidden');
    examScreen.style.display = 'none';

    if (type === 'TAB_SWITCH_LIMIT') {
        submittedScreen.style.display = 'flex';
        const iconEl = submittedScreen.querySelector('.end-icon');
        const titleEl = submittedScreen.querySelector('h2');
        const descEl = submittedScreen.querySelector('p');
        if (iconEl) iconEl.textContent = '⚠️';
        if (titleEl) titleEl.textContent = 'Exam Terminated!';
        if (descEl) descEl.innerHTML = 'Maximum tab-switch limit reached. Your examination has been automatically submitted and terminated.';
        document.getElementById('submit-student').textContent = `${currentStudent.name} · ${currentStudent.roll}`;
        document.getElementById('submit-summary').innerHTML = `Questions attempted: ${attempted.filter(Boolean).length} / 5 <br><span style="font-size:24px;color:#ef4444;font-weight:bold;margin-top:10px;display:block;">Overall Total Marks: ${earnedMarks} / 50</span>`;
    } else if (type === 'TIMER_EXPIRED') {
        timeoutScreen.style.display = 'flex';
        document.getElementById('timeout-student').textContent = `${currentStudent.name} · ${currentStudent.roll}`;
        document.getElementById('timeout-summary').innerHTML = `Questions attempted: ${attempted.filter(Boolean).length} / 5 <br><span style="font-size:24px;color:#4ade80;font-weight:bold;margin-top:10px;display:block;">Overall Total Marks: ${earnedMarks} / 50</span>`;
    } else { // MANUAL
        submittedScreen.style.display = 'flex';
        const iconEl = submittedScreen.querySelector('.end-icon');
        const titleEl = submittedScreen.querySelector('h2');
        const descEl = submittedScreen.querySelector('p');
        if (iconEl) iconEl.textContent = '✅';
        if (titleEl) titleEl.textContent = 'Exam Submitted!';
        if (descEl) descEl.innerHTML = 'Your exam has been submitted successfully. Please wait for the invigilator\'s instructions.';
        document.getElementById('submit-student').textContent = `${currentStudent.name} · ${currentStudent.roll}`;
        document.getElementById('submit-summary').innerHTML = `Questions attempted: ${attempted.filter(Boolean).length} / 5 <br><span style="font-size:24px;color:#4ade80;font-weight:bold;margin-top:10px;display:block;">Overall Total Marks: ${earnedMarks} / 50</span>`;
    }
}

async function triggerTimeout() {
    await terminateExam('TIMER_EXPIRED');
}


// ═══════════════════════════════════════════════════════
//  CODE EDITOR ACTIONS
// ═══════════════════════════════════════════════════════
function saveCurrent() {
  if (typeof editor !== 'undefined') { codes[currentTab] = editor.getValue(); } else { codes[currentTab] = ''; }
  stdins[currentTab] = document.getElementById('stdin-input').value;
  if (codes[currentTab].trim()) {
    attempted[currentTab] = true;
  }
  updateProgress();
}

let autoSaveTimeout = null;

function autoSaveProgress() {
  if (!currentStudent) return;

  // Save current editor state to memory
  if (typeof editor !== 'undefined') { codes[currentTab] = editor.getValue(); }
  const stdinEl = document.getElementById('stdin-input');
  stdins[currentTab] = stdinEl ? stdinEl.value : '';

  // Calculate current marks and question details
  let earnedMarks = 0;
  let questionDetails = [];
  for (let i = 0; i < 5; i++) {
    let codeToTest = codes[i];
    let isAttempted = codeToTest.trim().length > 0;
    let qIdx = assignedQIdxs[i];
    let q = questions[qIdx];
    let isPassed = passed[i] && questionSubmitted[i];
    
    if (isPassed && isAttempted) earnedMarks += 10;
    
    questionDetails.push({
      no: i + 1,
      qId: q.no,
      title: q.title,
      attempted: isAttempted,
      passed: isPassed && isAttempted,
      submitted: questionSubmitted[i],
      marks: (isPassed && isAttempted) ? 10 : 0,
      code: codeToTest,
      stdin: stdins[i]
    });
  }

  let correctCount = questionDetails.filter(qd => qd.passed).length;
  let wrongCount = questionDetails.filter(qd => qd.submitted && !qd.passed).length;
  let resultClassification = "Fail";
  if (earnedMarks >= 40) resultClassification = "Excellent";
  else if (earnedMarks >= 30) resultClassification = "Good";
  else resultClassification = "Fail";

  let timeTaken = EXAM_DURATION - secondsLeft;

  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  // Avoid overwriting a submitted exam
  if (results[currentStudent.roll] && results[currentStudent.roll].status === "SUBMITTED") {
    return;
  }

  results[currentStudent.roll] = {
    ...(results[currentStudent.roll] || {}),
    marks: earnedMarks,
    attempts: attempted.filter(Boolean).length,
    status: (results[currentStudent.roll] && results[currentStudent.roll].status) || "ACTIVE",
    timestamp: new Date().toISOString(),
    questionDetails: questionDetails,
    timeTaken: timeTaken,
    studentId: currentStudent.roll,
    examId: 'PYTHON_LAB_2026',
    percentage: (earnedMarks / 50) * 100,
    examStartTime: examStartTime,
    tabWarnings: tabSwitches,
    correctCount: correctCount,
    wrongCount: wrongCount,
    resultClassification: resultClassification
  };

  localStorage.setItem('assessment_results', JSON.stringify(results));
}

// Push local progress to PostgreSQL database
async function syncProgressToFirebase() {
  if (!currentStudent) return;
  
  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  const studentData = results[currentStudent.roll];
  if (!studentData) return;
  
  // Avoid overwriting a submitted exam
  if (studentData.status === "SUBMITTED") return;

  const derived = deriveDeptAndSection(currentStudent.branch, currentStudent.roll);
  try {
    await fetch(`${API_BASE}/api/results`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            roll: currentStudent.roll,
            name: currentStudent.name,
            branch: currentStudent.branch,
            department: derived.department,
            section: derived.section,
            studentId: currentStudent.roll,
            examId: 'PYTHON_LAB_2026',
            percentage: studentData.marks !== undefined ? (studentData.marks / 50) * 100 : 0,
            ...studentData
        })
    });
    console.log("Successfully synced progress to PostgreSQL.");
  } catch(e) {
    console.error("PostgreSQL sync failed", e);
  }
}

function triggerAutoSave() {
  if (autoSaveTimeout) clearTimeout(autoSaveTimeout);
  autoSaveTimeout = setTimeout(() => {
    autoSaveProgress();
  }, 2000);
}

function updateProgress() {
  const att = attempted.filter(Boolean).length;
  const pCount = passed.filter(Boolean).length;
  const marks = pCount * 10;
  document.getElementById('progress-info').textContent = `${att} / 5 attempted · Marks: ${marks} / 50`;
  
  const submitBtn = document.getElementById('open-submit-modal-btn');
  if (marks >= 10) {
      submitBtn.classList.remove('locked');
      submitBtn.title = "";
  } else {
      submitBtn.classList.add('locked');
      submitBtn.title = "active only after reach min 10 marks";
  }
}



// ═══════════════════════════════════════════════════════
//  NEW PYODIDE & CODEMIRROR LOGIC
// ═══════════════════════════════════════════════════════
let pyodideInstance;
let editor;

document.addEventListener("DOMContentLoaded", async () => {
    // Inject export modal
    injectReportModal();

    // Rebuild modals dynamically
    rebuildAddStudentModal();
    rebuildEditStudentModal();

    // Dynamically insert filter dropdown next to search input
    const searchBarDiv = document.querySelector('#admin-search-input')?.parentNode;
    if (searchBarDiv && !document.getElementById('admin-filter-select')) {
        searchBarDiv.style.gap = '12px';
        const filterSelect = document.createElement('select');
        filterSelect.id = 'admin-filter-select';
        filterSelect.style.cssText = 'padding: 10px 16px; font-size: 13px; border-radius: 8px; border: 1px solid var(--border); background: var(--navy2); color: #fff; outline: none; cursor: pointer;';
        filterSelect.innerHTML = `
            <option value="all">All Students</option>
            <option value="CSE">Dept: CSE</option>
            <option value="ECE">Dept: ECE</option>
            <option value="Allowed">Permission: Allowed</option>
            <option value="Blocked">Permission: Blocked</option>
            <option value="SUBMITTED">Status: Completed</option>
            <option value="ACTIVE">Status: Online</option>
            <option value="ABSENT">Status: Absent</option>
            <option value="Not Started">Status: Not Started</option>
        `;
        searchBarDiv.insertBefore(filterSelect, document.getElementById('admin-search-input'));
        filterSelect.addEventListener('change', () => {
            renderAdmin(true);
        });
    }

    // 1. Setup CodeMirror
    editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
        mode: "python",
        theme: "material-ocean",
        lineNumbers: true,
        indentUnit: 4,
        matchBrackets: true,
        autoCloseBrackets: true,
        indentWithTabs: false,
        dragDrop: false
    });
    window.editor = editor;


    editor.on('change', () => {
        const val = editor.getValue().trim();
        passed[currentTab] = false;
        let tabEl = document.getElementById(`tab-${currentTab}`);
        if (tabEl) {
            tabEl.classList.remove('passed');
            tabEl.classList.add('opened');
            let qMarks = document.querySelector('.q-marks');
            if (qMarks) {
                qMarks.innerHTML = '10 Marks';
                qMarks.style.color = 'var(--muted2)';
                qMarks.style.fontWeight = 'normal';
            }
        }
        if (val) {
            attempted[currentTab] = true;
        } else {
            attempted[currentTab] = false;
        }
        updateProgress();
        triggerAutoSave();
    });

    // 2. Load Pyodide
    try {
        window.stdinLines = [];
        pyodideInstance = await loadPyodide({
            stdin: () => {
                if (window.stdinLines && window.stdinLines.length > 0) {
                    return window.stdinLines.shift() + '\n';
                }
                return '\n';
            },
            stdout: (text) => { appendToConsole(text, false); },
            stderr: (text) => { appendToConsole(text, true); }
        });
        
        // Setup robust input override
        await pyodideInstance.runPythonAsync(`
import builtins
import re
from js import window

_stdin_tokens = []
_original_input = builtins.input

def smart_input(*args, **kwargs):
    global _stdin_tokens
    if _stdin_tokens:
        return _stdin_tokens.pop(0)
    
    try:
        line = _original_input(*args, **kwargs)
    except Exception:
        return ""
        
    code = window.grading_code if hasattr(window, 'grading_code') and window.grading_code else ''
    if not code:
        code = window.editor.getValue() if hasattr(window, 'editor') and window.editor else ''
        
    has_split = 'split' in code
    
    if not has_split and re.match(r'^\\s*[-+]?\\d+(?:\\s+[-+]?\\d+)*\\s*$', line):
        tokens = line.split()
        if tokens:
            _stdin_tokens = tokens[1:]
            return tokens[0]
            
    return line

builtins.input = smart_input
        `);
        
        document.getElementById('loader').classList.add('hidden');
    } catch (err) {
        alert("Failed to load Secure Python Environment: " + err.message);
    }
});

function appendToConsole(text, isError) {
    const consoleDiv = document.getElementById('output-console');
    if (consoleDiv.textContent === '// Running…' || consoleDiv.textContent === '// Run your code to see output here') {
        consoleDiv.textContent = '';
    }
    const span = document.createElement('span');
    span.textContent = text + '\n';
    if (isError) { span.className = 'err-text'; }
    consoleDiv.appendChild(span);
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

document.getElementById('run-btn').addEventListener('click', async () => {
    saveCurrent();
    let code = editor.getValue();
    if (!code.trim()) return;
    
    if (currentStudent && window.logStudentActivity) {
        logStudentActivity(currentStudent.roll, 'RUN_CODE', `Question ${currentTab + 1}`, currentTab + 1);
    }
    
    // Automatically convert any tabs to 4 spaces to prevent TabError
    code = code.replace(/\t/g, '    ');

    const runBtn = document.getElementById('run-btn');
    const spinner = document.getElementById('run-spinner');
    const oc = document.getElementById('output-console');
    const os = document.getElementById('output-status');

    runBtn.disabled = true;
    spinner.style.display = 'inline-block';
    oc.textContent = '// Running…';
    oc.classList.remove('err-text');
    os.style.display = 'none';

    // Set up standard input buffer from the textarea
    let rawInput = document.getElementById('stdin-input').value;
    window.stdinLines = rawInput ? rawInput.split('\n') : [];

    try {
        await pyodideInstance.runPythonAsync(`
import sys, io
from js import window
builtins._stdin_tokens = []
sys.stdin = io.StringIO("\\n".join(list(window.stdinLines)) + "\\n")
        `);
        await pyodideInstance.runPythonAsync(code);
        
        // If nothing was printed, show OK
        if (oc.textContent === '// Running…') {
            oc.textContent = '';
        }
        
        os.textContent = 'OK';
        os.className = 'output-status ok';
    } catch (err) {
        let errorHeader = "❌ SYNTAX / RUNTIME ERROR:";
        if (err.message) {
            const match = err.message.match(/line\s+(\d+)/i);
            if (match) {
                errorHeader = `❌ SYNTAX / RUNTIME ERROR (at Line ${match[1]}):`;
            }
        }
        appendToConsole(errorHeader, true);
        if (err.message && err.message.includes('PythonError')) {
            appendToConsole(err.message, true);
        } else {
            console.error("Execution error:", err);
            appendToConsole(err.message, true);
        }
        os.textContent = 'ERROR';
        os.className = 'output-status err';
    } finally {
        os.style.display = 'inline-block';
        runBtn.disabled = false;
        spinner.style.display = 'none';
    }
});

document.getElementById('submit-answer-btn').addEventListener('click', async () => {
    saveCurrent();
    let code = editor.getValue();
    if (!code.trim()) {
        alert("The editor is empty. Please write code before submitting.");
        return;
    }
    
    if (!confirm("Are you sure you want to submit your answer for this question? This will lock your answer permanently.")) {
        return;
    }
    
    // Automatically convert any tabs to 4 spaces to prevent TabError
    code = code.replace(/\t/g, '    ');

    const submitBtn = document.getElementById('submit-answer-btn');
    const spinner = document.getElementById('run-spinner');
    const oc = document.getElementById('output-console');
    const os = document.getElementById('output-status');

    submitBtn.disabled = true;
    spinner.style.display = 'inline-block';
    oc.textContent = '// Submitting and Grading…';
    oc.classList.remove('err-text');
    os.style.display = 'none';

    let qIdx = assignedQIdxs[currentTab];
    let q = questions[qIdx];
    let allPassed = true;

    // Hardcoding/Logic check
    if (!code.includes('input') && !code.includes('sys.stdin')) {
        allPassed = false;
        appendToConsole("ERROR: Logic Check Failed.\nYou must use input() to dynamically read the hidden test cases.\nHardcoding variable values is not permitted.", true);
        os.textContent = 'LOGIC ERROR';
        os.className = 'output-status err';
        os.style.display = 'inline-block';
    } else {
        window.grading_code = code;
        for (let idx = 0; idx < q.samples.length; idx++) {
            let s = q.samples[idx];
            let sampleInput = s.input || "";
            let expectedOutput = s.output.trim();
            window.grading_stdin = sampleInput.split('\n');
            let grading_script = `
import sys, io, builtins
from js import window
builtins._stdin_tokens = []
def _grade_run():
    old_stdout = sys.stdout
    old_stdin = sys.stdin
    captured_out = io.StringIO()
    sys.stdout = captured_out
    try:
        sys.stdin = io.StringIO("\\n".join(list(window.grading_stdin)) + "\\n")
        exec(window.grading_code, {})
        return captured_out.getvalue()
    finally:
        sys.stdout = old_stdout
        sys.stdin = old_stdin
_grade_run()
`;
            try {
                let actualOutput = await pyodideInstance.runPythonAsync(grading_script);
                if (actualOutput) actualOutput = actualOutput.trim();
                else actualOutput = "";
                
                if (!compareOutput(actualOutput, expectedOutput, q.title)) {
                    allPassed = false;
                    appendToConsole(`❌ TEST CASE ${idx + 1} FAILED:\nInput:\n${sampleInput}\nExpected Output:\n${expectedOutput}\nActual Output:\n${actualOutput}\n`, true);
                    break;
                }
            } catch(e) {
                allPassed = false;
                let lineNumText = "";
                if (e.message) {
                    const match = e.message.match(/line\s+(\d+)/i);
                    if (match) {
                        lineNumText = ` (at Line ${match[1]})`;
                    }
                }
                appendToConsole(`❌ TEST CASE ${idx + 1} FAILED (Runtime Error)${lineNumText}:\nInput:\n${sampleInput}\nError:\n${e.message}\n`, true);
                break;
            }
        }
    }

    submitBtn.disabled = false;
    spinner.style.display = 'none';

    passed[currentTab] = allPassed;
    questionSubmitted[currentTab] = true;

    // Refresh UI
    buildNavTabs();
    toggleEditorVisibility();
    updateProgress();
    
    // Save progress
    autoSaveProgress();
    await syncProgressToFirebase();

    if (currentStudent && window.logStudentActivity) {
        await logStudentActivity(currentStudent.roll, 'SUBMIT_ANSWER', `Question ${currentTab + 1} (${allPassed ? 'Passed' : 'Failed'})`, currentTab + 1);
    }

    // Dynamically update the Marks header inside the left question description panel too!
    renderQuestion(currentTab);
});

document.getElementById('clear-btn').addEventListener('click', () => {
    if (confirm('Clear the editor for this question?')) {
        editor.setValue('');
        codes[currentTab] = '';
    }
});

document.getElementById('copy-btn').addEventListener('click', () => {
    const code = editor.getValue();
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.getElementById('copy-btn');
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
    });
});

document.getElementById('open-submit-modal-btn').addEventListener('click', () => {
    saveCurrent();
    const pCount = passed.filter(Boolean).length;
    if (pCount * 10 < 10) return; // Locked until 10 marks
    const att = attempted.filter(Boolean).length;
    document.getElementById('modal-attempt-info').textContent =
      `${att} of 5 questions attempted · Estimated marks: ${att * 10} / 50`;
    document.getElementById('submit-modal').classList.add('active');
});

document.getElementById('close-modal-btn').addEventListener('click', () => {
    document.getElementById('submit-modal').classList.remove('active');
});


document.getElementById('confirm-submit-btn').addEventListener('click', async () => {
    document.getElementById('submit-modal').classList.remove('active');
    await terminateExam('MANUAL');
});


// Close modal on overlay click
document.getElementById('submit-modal').addEventListener('click', function(e) {
  if (e.target === this) document.getElementById('submit-modal').classList.remove('active');
});




// ═══════════════════════════════════════════════════════
//  ADMIN DASHBOARD, ANALYTICS & PDF REPORTS
// ═══════════════════════════════════════════════════════
async function saveResultToLocal(roll, attemptedCount, marks, status, questionDetails = [], timeTaken = 0) {
  const resultData = {
    marks: marks,
    attempts: attemptedCount,
    status: status || "SUBMITTED",
    timestamp: new Date().toISOString(),
    questionDetails: questionDetails,
    timeTaken: timeTaken,
    studentId: roll,
    examId: 'PYTHON_LAB_2026',
    percentage: (marks / 50) * 100
  };

  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  results[roll] = { ...(results[roll] || {}), ...resultData };
  localStorage.setItem('assessment_results', JSON.stringify(results));

  try {
      await fetch(`${API_BASE}/api/results`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              roll: roll,
              name: currentStudent ? currentStudent.name : null,
              branch: currentStudent ? currentStudent.branch : null,
              ...resultData
          })
      });
      console.log("Successfully synced final result to PostgreSQL!");
  } catch(e) {
      console.error("Failed to sync final result to PostgreSQL", e);
  }
}

window.markAbsent = function(roll) {
  if (confirm("Mark student " + roll + " as ABSENT? They will not be able to login.")) {
      saveResultToLocal(roll, 0, 0, "ABSENT");
      renderAdmin();
  }
};

window.allowRetest = async function(roll) {
  if (confirm("Allow student " + roll + " to retake the test? This will permanently delete their current score!")) {
      let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
      delete results[roll];
      localStorage.setItem('assessment_results', JSON.stringify(results));
      
      try {
          const res = await fetch(`${API_BASE}/api/results/${roll}`, {
              method: 'DELETE'
          });
          const data = await res.json();
          if (data.success) {
              console.log("Score deleted from database successfully.");
          } else {
              console.error("Failed to delete score from database:", data.error);
          }
      } catch (e) {
          console.error("Error deleting score from database:", e);
      }
      renderAdmin();
  }
};

window.resetStudentSession = async function(roll) {
  if (confirm("Reset active session for student " + roll + "? This will clear their active login state and allow them to log back in to resume their exam progress.")) {
      let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
      if (results[roll]) {
          results[roll].status = "Not Started";
      }
      localStorage.setItem('assessment_results', JSON.stringify(results));
      
      try {
          await fetch(`${API_BASE}/api/results`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  roll: roll,
                  status: "Not Started"
              })
          });
          console.log(`Successfully reset session status for ${roll}`);
      } catch (e) {
          console.error("Failed to reset session in database:", e);
      }
      
      renderAdmin();
  }
};

let chartInstance1 = null;
let chartInstance2 = null;

window.updateAuthMode = function(roll, mode) {
    let authModes = JSON.parse(localStorage.getItem('student_auth_modes') || '{}');
    authModes[roll] = mode;
    localStorage.setItem('student_auth_modes', JSON.stringify(authModes));
};

document.getElementById('toggle-exam-btn').addEventListener('click', () => {
    let config = JSON.parse(localStorage.getItem('admin_config') || '{"examOpen":true}');
    config.examOpen = !config.examOpen;
    localStorage.setItem('admin_config', JSON.stringify(config));
    renderAdmin();
});async function renderAdmin(skipFirebaseFetch = false) {
  const tbody = document.getElementById('admin-tbody');
  
  let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
  
  if (!skipFirebaseFetch) {
      try {
          if (!tbody.innerHTML || tbody.innerHTML.trim() === '') {
              tbody.innerHTML = '<tr><td colspan="20" style="text-align:center;padding:20px;color:var(--muted);">Loading live results...</td></tr>';
          }
          const res = await fetch(`${API_BASE}/api/results`);
          if (!res.ok) throw new Error("HTTP error " + res.status);
          const dbResults = await res.json();
          results = { ...results, ...dbResults };
          localStorage.setItem('assessment_results', JSON.stringify(results));
          
          const dbInd = document.getElementById('db-status-indicator');
          if (dbInd) {
              dbInd.style.background = 'rgba(16,185,129,0.15)';
              dbInd.style.color = '#34d399';
              dbInd.innerHTML = '<span class="pulse-dot" style="width:8px;height:8px;border-radius:50%;background:#34d399;display:inline-block;box-shadow:0 0 8px #34d399;"></span> DATABASE ONLINE';
          }
      } catch (e) {
          console.error("Error fetching from Neon. Using local results.", e);
          const dbInd = document.getElementById('db-status-indicator');
          if (dbInd) {
              dbInd.style.background = 'rgba(239,68,68,0.15)';
              dbInd.style.color = '#fca5a5';
              dbInd.innerHTML = '<span class="pulse-dot" style="width:8px;height:8px;border-radius:50%;background:#ef4444;display:inline-block;"></span> DATABASE OFFLINE';
          }
      }
  }
  tbody.innerHTML = '';

  const globalConfig = JSON.parse(localStorage.getItem('admin_config') || '{"examOpen":true}');
  const examInd = document.getElementById('exam-status-indicator');
  const examBtn = document.getElementById('toggle-exam-btn');
  if (globalConfig.examOpen) {
      examInd.textContent = "EXAM OPEN";
      examInd.style.background = "rgba(16,185,129,0.15)";
      examInd.style.color = "#34d399";
      examBtn.textContent = "Close Exam";
  } else {
      examInd.textContent = "EXAM CLOSED";
      examInd.style.background = "rgba(239,68,68,0.15)";
      examInd.style.color = "#fca5a5";
      examBtn.textContent = "Open Exam";
  }
  
  let branchStats = {};
  let totalRegistered = students.length;
  let totalOnline = 0;
  let totalLoggedIn = 0;
  let totalStarted = 0;
  let totalInProgress = 0;
  let totalSubmitted = 0;
  let totalPending = 0;
  let totalAbsent = 0;
  
  let marksList = [];
  let passedSubmittedCount = 0;
  let failedSubmittedCount = 0;
  let totalExcellent = 0;
  let totalGood = 0;
  
  students.forEach((s) => {
    if (!branchStats[s.branch]) {
      branchStats[s.branch] = { total: 0, submitted: 0, totalMarks: 0, absent: 0 };
    }
    branchStats[s.branch].total++;
    
    const res = results[s.roll];
    if (res) {
      const onlineVal = res.onlineStatus || res.online_status || 'Offline';
      if (onlineVal === 'Online') {
          totalOnline++;
      }
      
      if (res.loginTime || res.login_time) {
          totalLoggedIn++;
      }
      
      if (res.status === "ABSENT") {
         branchStats[s.branch].absent++;
         totalAbsent++;
      } else if (res.status === "SUBMITTED") {
         branchStats[s.branch].submitted++;
         branchStats[s.branch].totalMarks += res.marks || 0;
         totalSubmitted++;
         totalStarted++;
         
         const m = res.marks || 0;
         marksList.push(m);
         
         if (m >= 40) totalExcellent++;
         else if (m >= 30) totalGood++;
         
         if (m >= 30) {
             passedSubmittedCount++;
         } else {
             failedSubmittedCount++;
         }
      } else if (res.status === "ACTIVE" || res.status === "IDLE") {
         totalStarted++;
         totalInProgress++;
      } else {
         totalPending++;
      }
    } else {
      totalPending++;
    }
  });

  let avgMarks = 0;
  let highestMarks = 0;
  let lowestMarks = 0;
  let passPercentage = 0;
  let failPercentage = 0;
  
  if (marksList.length > 0) {
      const sum = marksList.reduce((a, b) => a + b, 0);
      avgMarks = (sum / marksList.length).toFixed(1);
      highestMarks = Math.max(...marksList);
      lowestMarks = Math.min(...marksList);
      passPercentage = ((passedSubmittedCount / marksList.length) * 100).toFixed(1);
      failPercentage = ((failedSubmittedCount / marksList.length) * 100).toFixed(1);
  }

  const analyticsDiv = document.getElementById('admin-analytics');
  let analyticsHTML = `
    <div style="width:100%; display:flex; flex-direction:column; gap:20px;">
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:20px; width:100%;">
         <!-- Card 1: Registration Status -->
         <div style="background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:space-between; min-height:120px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
             <div style="font-family:'Space Mono',monospace; color:var(--accent2); font-size:12px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase;">Registration Status</div>
             <div style="font-size:28px; color:var(--text); font-weight:700; margin:10px 0;">${totalRegistered} <span style="font-size:14px; color:var(--muted); font-weight:normal;">Registered</span></div>
             <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--muted);">
                 <span>Pending: <strong style="color:var(--text);">${totalPending}</strong></span>
                 <span>Absent: <strong style="color:var(--red);">${totalAbsent}</strong></span>
             </div>
         </div>
         <!-- Card 2: Live Activity -->
         <div style="background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:space-between; min-height:120px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
             <div style="font-family:'Space Mono',monospace; color:#3b82f6; font-size:12px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase;">Live Connectivity</div>
             <div style="font-size:28px; color:#60a5fa; font-weight:700; margin:10px 0;">${totalOnline} <span style="font-size:14px; color:var(--muted); font-weight:normal;">Online</span></div>
             <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--muted);">
                 <span>Logged In: <strong style="color:var(--text);">${totalLoggedIn}</strong></span>
                 <span>Offline: <strong style="color:var(--muted);">${totalRegistered - totalOnline}</strong></span>
             </div>
         </div>
         <!-- Card 3: Exam Progress -->
         <div style="background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:space-between; min-height:120px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
             <div style="font-family:'Space Mono',monospace; color:#10b981; font-size:12px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase;">Exam Progress</div>
             <div style="font-size:28px; color:#34d399; font-weight:700; margin:10px 0;">${totalStarted} <span style="font-size:14px; color:var(--muted); font-weight:normal;">Started</span></div>
             <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--muted);">
                 <span>In Progress: <strong style="color:#fb923c;">${totalInProgress}</strong></span>
                 <span>Submitted: <strong style="color:#34d399;">${totalSubmitted}</strong></span>
             </div>
         </div>
         <!-- Card 4: Score Range -->
         <div style="background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:space-between; min-height:120px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
             <div style="font-family:'Space Mono',monospace; color:#fb923c; font-size:12px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase;">Average Score</div>
             <div style="font-size:28px; color:#fdba74; font-weight:700; margin:10px 0;">${avgMarks} <span style="font-size:14px; color:var(--muted); font-weight:normal;">Avg Marks</span></div>
             <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--muted);">
                 <span>Highest: <strong style="color:#34d399;">${highestMarks}</strong></span>
                 <span>Lowest: <strong style="color:#f87171;">${lowestMarks}</strong></span>
             </div>
         </div>
         <!-- Card 5: Result Classification -->
         <div style="background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:space-between; min-height:120px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
             <div style="font-family:'Space Mono',monospace; color:#ec4899; font-size:12px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase;">Success Rate</div>
             <div style="font-size:28px; color:#f472b6; font-weight:700; margin:10px 0;">${passPercentage}% <span style="font-size:14px; color:var(--muted); font-weight:normal;">Pass</span></div>
             <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--muted);">
                 <span>Fail Rate: <strong style="color:#f87171;">${failPercentage}%</strong></span>
                 <span>Submitted: <strong style="color:var(--text);">${totalSubmitted}</strong></span>
             </div>
         </div>
      </div>
      
      <div style="display:flex; gap:20px; flex-wrap:wrap; width:100%;">
          <div style="flex:2; display:flex; gap:20px; flex-wrap:wrap; min-width:300px;">
  `;

  let labels = [];
  let avgData = [];

  for (let branch in branchStats) {
    let stat = branchStats[branch];
    let avg = stat.submitted > 0 ? (stat.totalMarks / stat.submitted).toFixed(1) : 0;
    labels.push(branch);
    avgData.push(avg);

    analyticsHTML += `
      <div style="flex:1; min-width:220px; background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:space-between; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <div style="font-family:'Space Mono',monospace; color:var(--accent2); font-size:13px; font-weight:700; margin-bottom:12px; text-transform:uppercase;">${branch}</div>
        <div style="display:flex; justify-content:space-between; gap:12px; font-size:13px; color:var(--muted);">
          <div>
             <div style="font-size:22px; color:var(--text); font-weight:700;">${stat.total}</div>
             <div style="font-size:11px;">Total</div>
          </div>
          <div>
             <div style="font-size:22px; color:#34d399; font-weight:700;">${stat.submitted}</div>
             <div style="font-size:11px;">Submitted</div>
          </div>
          <div>
             <div style="font-size:22px; color:var(--blue-light); font-weight:700;">${avg}</div>
             <div style="font-size:11px;">Avg Marks</div>
          </div>
        </div>
      </div>
    `;
  }
  
  analyticsHTML += `
          </div>
          <div style="flex:1; min-width:250px; background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:20px; display:flex; flex-direction:column; align-items:center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
              <div style="font-family:'Space Mono',monospace; color:var(--muted); font-size:11px; font-weight:700; margin-bottom:10px; text-transform:uppercase; width:100%; text-align:left;">Branch Avg Marks</div>
              <canvas id="branchChart" style="max-height:150px; width:100%;"></canvas>
          </div>
          <div style="flex:1; min-width:250px; background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:20px; display:flex; flex-direction:column; align-items:center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
              <div style="font-family:'Space Mono',monospace; color:var(--muted); font-size:11px; font-weight:700; margin-bottom:10px; text-transform:uppercase; width:100%; text-align:left;">Performance Distribution</div>
              <canvas id="statusChart" style="max-height:150px; width:100%;"></canvas>
          </div>
      </div>
    </div>
  `;
  analyticsDiv.innerHTML = analyticsHTML;

  setTimeout(() => {
    if (typeof Chart === 'undefined') {
        console.warn("Chart.js is not loaded. Skipping chart rendering.");
        return;
    }
    const ctx1 = document.getElementById('branchChart').getContext('2d');
    if (chartInstance1) chartInstance1.destroy();
    chartInstance1 = new Chart(ctx1, {
        type: 'bar',
        data: { labels: labels, datasets: [{ label: 'Avg Marks', data: avgData, backgroundColor: '#3b82f6' }] },
        options: { plugins: { legend: { display: false } }, responsive: true, maintainAspectRatio: false }
    });

    const ctx2 = document.getElementById('statusChart').getContext('2d');
    if (chartInstance2) chartInstance2.destroy();
    chartInstance2 = new Chart(ctx2, {
        type: 'doughnut',
        data: { 
            labels: ['Excellent', 'Good', 'Fail', 'Absent', 'In Progress', 'Not Started'], 
            datasets: [{ 
                data: [totalExcellent, totalGood, totalFail, totalAbsent, totalInProgress, totalPending], 
                backgroundColor: ['#eab308', '#3b82f6', '#ef4444', '#8b5cf6', '#34d399', '#374151'], 
                borderWidth: 0 
            }] 
        },
        options: { plugins: { legend: { position: 'right', labels: { color: '#ccc' } } }, responsive: true, maintainAspectRatio: false }
    });
  }, 100);
  
  const thead = document.querySelector('#admin-table thead');
  if (thead) {
      thead.innerHTML = `
          <tr style="background:rgba(255,255,255,.05);border-bottom:1px solid var(--border);font-family:'Space Mono',monospace;font-size:11px;color:var(--muted);text-transform:uppercase;">
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:2%;">#</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:8%;white-space:nowrap;">Hall Ticket</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:8%;">Name</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:4%;">Dept</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:10%;">Branch</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:2%;">Sec</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:6%;white-space:nowrap;">Permission</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:6%;white-space:nowrap;">Online Status</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:6%;white-space:nowrap;">Exam Status</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:4%;white-space:nowrap;">Curr Q</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:8%;">Activity</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:4%;">Warnings</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:5%;">Marks</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:4%;">Correct</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:4%;">Wrong</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:6%;white-space:nowrap;">Login Time</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:6%;white-space:nowrap;">Start Time</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:6%;white-space:nowrap;">End Time</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:6%;white-space:nowrap;">Last Active</th>
              <th style="padding:10px 4px;text-align:left;font-weight:600;color:var(--muted);width:10%;">Actions</th>
          </tr>
      `;
  }

  let sortedStudents = [...students].sort((a, b) => {
      const branchA = (a.branch || '').toLowerCase();
      const branchB = (b.branch || '').toLowerCase();
      if (branchA < branchB) return -1;
      if (branchA > branchB) return 1;
      const rollA = (a.roll || '').toLowerCase();
      const rollB = (b.roll || '').toLowerCase();
      if (rollA < rollB) return -1;
      if (rollA > rollB) return 1;
      return 0;
  });

  const searchInput = document.getElementById('admin-search-input');
  const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
  if (searchQuery) {
      sortedStudents = sortedStudents.filter(s => {
          const res = results[s.roll] || {};
          const derived = deriveDeptAndSection(s.branch, s.roll);
          const name = res.name || s.name || '';
          const roll = res.roll || s.roll || '';
          const branch = res.branch || s.branch || '';
          const dept = res.department || s.department || derived.department || '';
          return name.toLowerCase().includes(searchQuery) ||
                 roll.toLowerCase().includes(searchQuery) ||
                 branch.toLowerCase().includes(searchQuery) ||
                 dept.toLowerCase().includes(searchQuery);
      });
  }

  const filterSelect = document.getElementById('admin-filter-select');
  const filterValue = filterSelect ? filterSelect.value : 'all';
  if (filterValue !== 'all') {
      sortedStudents = sortedStudents.filter(s => {
          const res = results[s.roll] || {};
          const derived = deriveDeptAndSection(s.branch, s.roll);
          const studentPermission = res.examPermission || res.exam_permission || s.exam_permission || 'Allowed';
          const studentStatus = res.status || 'Not Started';
          const studentDept = res.department || s.department || derived.department || 'CSE';
          
          if (filterValue === 'CSE' || filterValue === 'ECE') {
              return studentDept === filterValue;
          }
          if (filterValue === 'Allowed' || filterValue === 'Blocked') {
              return studentPermission === filterValue;
          }
          if (filterValue === 'SUBMITTED') {
              return studentStatus === 'SUBMITTED';
          }
          if (filterValue === 'ACTIVE') {
              return studentStatus === 'ACTIVE' || studentStatus === 'IDLE';
          }
          if (filterValue === 'ABSENT') {
              return studentStatus === 'ABSENT';
          }
          if (filterValue === 'Not Started') {
              return studentStatus === 'Not Started' || !res.status;
          }
          return true;
      });
  }

  if (sortedStudents.length === 0) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td colspan="20" style="text-align:center;padding:30px;color:var(--muted2);font-size:14px;">No students found matching current filters</td>`;
      tbody.appendChild(tr);
  } else {
      const displayValue = (val) => {
          if (val === undefined || val === null || String(val).trim() === '') {
              return `<span style="color:var(--muted2); font-style:italic;">Empty</span>`;
          }
          return val;
      };
      
      const formatTime = (isoStr) => {
          if (!isoStr) return '-';
          try {
              const d = new Date(isoStr);
              if (isNaN(d.getTime())) return isoStr;
              return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          } catch(e) {
              return isoStr;
          }
      };

      sortedStudents.forEach((s, i) => {
        const res = results[s.roll] || {};
        const derived = deriveDeptAndSection(s.branch || res.branch, s.roll);
        
        const isSub = res.status === 'SUBMITTED';
        const isAbs = res.status === 'ABSENT';
        const isActive = res.status === 'ACTIVE';
        const isIdle = res.status === 'IDLE';
        
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        tr.style.transition = 'background 0.2s';
        tr.style.fontSize = '12px';
        tr.onmouseover = () => tr.style.background = 'rgba(255,255,255,0.02)';
        tr.onmouseout = () => tr.style.background = 'transparent';
        
        let examStatusBadge = `<span style="color:var(--muted2);">Not Started</span>`;
        if (isAbs) {
            examStatusBadge = `<span style="display:inline-block;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;background:rgba(139,92,246,0.15);color:#a78bfa;">ABSENT</span>`;
        } else if (isSub) {
            examStatusBadge = `<span style="display:inline-block;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;background:rgba(16,185,129,0.15);color:#34d399;">COMPLETED</span>`;
        } else if (isActive || isIdle) {
            if (isActive) {
                examStatusBadge = `<span style="display:inline-flex;align-items:center;gap:4px;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;background:rgba(16,185,129,0.15);color:#34d399;">ACTIVE</span>`;
            } else if (isIdle) {
                examStatusBadge = `<span style="display:inline-flex;align-items:center;gap:4px;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;background:rgba(249,115,22,0.15);color:#fb923c;">IDLE</span>`;
            }
        }
        
        const onlineVal = res.onlineStatus || res.online_status || 'Offline';
        let onlineStatusBadge = `<span style="display:inline-block;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;background:rgba(255,255,255,0.05);color:var(--muted2);">Offline</span>`;
        if (onlineVal === 'Online') {
            onlineStatusBadge = `<span class="pulse-dot" style="display:inline-flex;align-items:center;gap:4px;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;background:rgba(16,185,129,0.15);color:#34d399;"><span style="width:6px;height:6px;border-radius:50%;background:#34d399;display:inline-block;"></span>Online</span>`;
        } else if (onlineVal === 'Idle') {
            onlineStatusBadge = `<span style="display:inline-flex;align-items:center;gap:4px;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;background:rgba(249,115,22,0.15);color:#fb923c;"><span style="width:6px;height:6px;border-radius:50%;background:#fb923c;display:inline-block;"></span>Idle</span>`;
        }
        
        const permission = res.examPermission || res.exam_permission || s.exam_permission || 'Allowed';
        let permissionBadge = `<span style="display:inline-block;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;background:rgba(16,185,129,0.15);color:#34d399;cursor:pointer;white-space:nowrap;" onclick="toggleExamPermission('${s.roll}')">Allowed</span>`;
        if (permission === 'Blocked') {
            permissionBadge = `<span style="display:inline-block;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;background:rgba(239,68,68,0.15);color:#fca5a5;cursor:pointer;white-space:nowrap;" onclick="toggleExamPermission('${s.roll}')">Blocked</span>`;
        }
        
        const nameVal = displayValue(res.name !== undefined ? res.name : s.name);
        const deptVal = displayValue(res.department !== undefined ? res.department : (s.department || derived.department));
        const branchVal = displayValue(res.branch !== undefined ? res.branch : s.branch);
        const secVal = displayValue(res.section !== undefined ? res.section : (s.section || derived.section));
        
        const currentQ = res.currentQuestion !== undefined && res.currentQuestion !== null && res.currentQuestion > 0 ? `Q${res.currentQuestion}` : '-';
        const activityVal = res.currentActivity || res.current_activity || '-';
        const warningsVal = res.tabWarnings !== undefined ? res.tabWarnings : (res.tab_warnings !== undefined ? res.tab_warnings : 0);
        let warningsBadge = `<span style="font-family:'Space Mono',monospace;">${warningsVal}</span>`;
        if (warningsVal > 0) {
            warningsBadge = `<strong style="font-family:'Space Mono',monospace; color: ${warningsVal >= 3 ? 'var(--red)' : 'var(--accent)'};">${warningsVal}</strong>`;
        }

        const isLive = isActive || isIdle || isSub;
        const marksDisp = isLive ? (res.marks !== undefined ? `${res.marks} / 50` : '0 / 50') : '-';
        const correctDisp = isLive ? (res.correctCount !== undefined ? res.correctCount : 0) : '-';
        const wrongDisp = isLive ? (res.wrongCount !== undefined ? res.wrongCount : 0) : '-';
        
        tr.innerHTML = `
          <td style="padding:10px 4px;color:var(--muted2);">${i + 1}</td>
          <td style="padding:10px 4px;font-family:'Space Mono',monospace;color:var(--text); white-space:nowrap;">${s.roll}</td>
          <td style="padding:10px 4px;color:var(--text);">${nameVal}</td>
          <td style="padding:10px 4px;color:var(--text);">${deptVal}</td>
          <td style="padding:10px 4px;color:var(--muted);">${branchVal}</td>
          <td style="padding:10px 4px;color:var(--muted);">${secVal}</td>
          <td style="padding:10px 4px;">${permissionBadge}</td>
          <td style="padding:10px 4px;">${onlineStatusBadge}</td>
          <td style="padding:10px 4px;">${examStatusBadge}</td>
          <td style="padding:10px 4px;font-family:'Space Mono',monospace;text-align:center;">${currentQ}</td>
          <td style="padding:10px 4px;color:var(--muted);max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${activityVal}">${activityVal}</td>
          <td style="padding:10px 4px;text-align:center;">${warningsBadge}</td>
          <td style="padding:10px 4px;font-family:'Space Mono',monospace;font-weight:700;color:${isSub ? '#34d399' : (isLive ? 'var(--text)' : 'var(--muted2)')};">${marksDisp}</td>
          <td style="padding:10px 4px;text-align:center;font-family:'Space Mono',monospace;color:${correctDisp > 0 ? '#34d399' : 'var(--muted2)'};">${correctDisp}</td>
          <td style="padding:10px 4px;text-align:center;font-family:'Space Mono',monospace;color:${wrongDisp > 0 ? 'var(--red)' : 'var(--muted2)'};">${wrongDisp}</td>
          <td style="padding:10px 4px;color:var(--muted); font-size:11px; white-space:nowrap;">${formatTime(res.loginTime || res.login_time)}</td>
          <td style="padding:10px 4px;color:var(--muted); font-size:11px; white-space:nowrap;">${formatTime(res.examStartTime || res.exam_start_time)}</td>
          <td style="padding:10px 4px;color:var(--muted); font-size:11px; white-space:nowrap;">${isSub ? formatTime(res.timestamp) : '-'}</td>
          <td style="padding:10px 4px;color:var(--muted); font-size:11px; white-space:nowrap;">${formatTime(res.lastActiveStr || res.last_active_str)}</td>
          <td style="padding:10px 4px; white-space:nowrap;">
            ${!isSub ? `<button class="clear-btn" style="padding:2px 6px;font-size:11px;border-color:var(--red);color:var(--red);margin-right:2px;" onclick="markAbsent('${s.roll}')">Absent</button>` : ''}
            ${(isActive || isIdle) ? `<button class="clear-btn" style="padding:2px 6px;font-size:11px;border-color:var(--yellow);color:var(--yellow);margin-right:2px;" onclick="resetStudentSession('${s.roll}')">Reset Session</button>` : ''}
            ${(isSub || isAbs) ? `<button class="clear-btn" style="padding:2px 6px;font-size:11px;border-color:var(--yellow);color:var(--yellow);margin-right:2px;" onclick="allowRetest('${s.roll}')">Retest</button>` : ''}
            ${isSub && !isAbs ? `<button class="clear-btn" style="padding:2px 6px;font-size:11px;border-color:var(--blue-light);color:var(--blue-light);margin-right:2px;" onclick="viewStudentReport('${s.roll}')">Report</button>` : ''}
            ${isSub && !isAbs ? `<button class="clear-btn" style="padding:2px 6px;font-size:11px;border-color:#10b981;color:#10b981;margin-right:2px;" onclick="emailStudentReport('${s.roll}')">Email</button>` : ''}
            <button class="clear-btn" style="padding:2px 6px;font-size:11px;border-color:var(--muted);color:var(--muted);margin-right:2px;" onclick="openEditStudent('${s.roll}')">Edit</button>
            <button class="clear-btn" style="padding:2px 6px;font-size:11px;border-color:var(--red);color:var(--red);" onclick="deleteStudent('${s.roll}')">Delete</button>
          </td>
        `;
        tbody.appendChild(tr);
      });
  }

  if (window.renderActivityTimeline) {
      window.renderActivityTimeline();
  }
}

window.renderActivityTimeline = async function() {
    const timelineLogs = document.getElementById('live-timeline-logs');
    if (!timelineLogs) return;
    
    try {
        const res = await fetch(`${API_BASE}/api/activities`);
        if (!res.ok) throw new Error("HTTP error " + res.status);
        const logs = await res.json();
        
        const timelineCount = document.getElementById('live-timeline-count');
        if (timelineCount) {
            timelineCount.textContent = `${logs.length} events logged`;
        }
        
        if (logs.length === 0) {
            timelineLogs.innerHTML = `<div style="color: var(--muted2); text-align: center; padding: 20px;">No recent student activity logs. Waiting for events...</div>`;
            return;
        }
        
        timelineLogs.innerHTML = '';
        logs.forEach(log => {
            const date = new Date(log.timestamp);
            const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            
            let typeColor = '#cbd5e1'; 
            let badgeBg = 'rgba(203,213,225,0.1)';
            let icon = 'ℹ️';
            
            switch (log.event_type) {
                case 'LOGIN':
                    typeColor = '#60a5fa'; 
                    badgeBg = 'rgba(96,165,250,0.1)';
                    icon = '🔑';
                    break;
                case 'START_EXAM':
                    typeColor = '#34d399'; 
                    badgeBg = 'rgba(52,211,153,0.1)';
                    icon = '📝';
                    break;
                case 'OPEN_QUESTION':
                    typeColor = '#a78bfa'; 
                    badgeBg = 'rgba(167,139,250,0.1)';
                    icon = '📖';
                    break;
                case 'RUN_CODE':
                    typeColor = '#fb923c'; 
                    badgeBg = 'rgba(251,146,60,0.1)';
                    icon = '⚙️';
                    break;
                case 'SUBMIT_ANSWER':
                    typeColor = '#facc15'; 
                    badgeBg = 'rgba(250,204,21,0.1)';
                    icon = '💾';
                    break;
                case 'TAB_WARNING':
                    typeColor = '#ef4444'; 
                    badgeBg = 'rgba(239,68,68,0.15)';
                    icon = '⚠️';
                    break;
                case 'LOGOUT':
                    typeColor = '#94a3b8'; 
                    badgeBg = 'rgba(148,163,184,0.1)';
                    icon = '🚪';
                    break;
                case 'EXAM_SUBMITTED':
                    typeColor = '#10b981'; 
                    badgeBg = 'rgba(16,185,129,0.2)';
                    icon = '🎓';
                    break;
            }
            
            const logItem = document.createElement('div');
            logItem.style.cssText = 'display: flex; gap: 12px; align-items: flex-start; padding: 10px 12px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 8px; transition: background 0.2s;';
            logItem.onmouseover = () => logItem.style.background = 'rgba(255,255,255,0.04)';
            logItem.onmouseout = () => logItem.style.background = 'rgba(255,255,255,0.02)';
            
            let detailsHtml = '';
            if (log.details) {
                detailsHtml = `<span style="color: var(--muted); font-size: 12px; margin-left: 6px;">(${log.details})</span>`;
            }
            
            logItem.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 6px; background: ${badgeBg}; color: ${typeColor}; font-size: 14px; flex-shrink: 0;">
                    ${icon}
                </div>
                <div style="flex: 1; min-width: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 4px;">
                        <div>
                            <strong style="color: #fff; font-family: 'Space Mono', monospace;">${log.roll}</strong>
                            <span style="display: inline-block; margin: 0 6px; color: rgba(255,255,255,0.15);">|</span>
                            <span style="display: inline-block; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: bold; background: ${badgeBg}; color: ${typeColor}; text-transform: uppercase;">${log.event_type}</span>
                            ${detailsHtml}
                        </div>
                        <span style="font-family: 'Space Mono', monospace; font-size: 11px; color: var(--muted2);">${timeStr}</span>
                    </div>
                </div>
            `;
            
            timelineLogs.appendChild(logItem);
        });
    } catch (e) {
        console.error("Error rendering activity timeline:", e);
    }
};

function getSystemDateString() {
    const d = new Date();
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}

window.viewStudentReport = function(roll) {
    const student = students.find(x => x.roll === roll);
    let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
    const res = results[roll];
    
    let resultText = "Pending";
    let resultColor = "#666";
    if (res && res.status !== "ABSENT") {
        if (res.marks === 50) { resultText = "EXCELLENT"; resultColor = "#d97706"; }
        else if (res.marks >= 40) { resultText = "GOOD"; resultColor = "#2563eb"; }
        else if (res.marks >= 30) { resultText = "PASS"; resultColor = "#059669"; }
        else { resultText = "FAIL"; resultColor = "#dc2626"; }
    } else if (res && res.status === "ABSENT") {
        resultText = "ABSENT"; resultColor = "#7c3aed";
    }

    const content = document.getElementById('student-report-content');
    
    let timeTakenStr = "N/A";
    if (res && res.timeTaken) {
        let m = Math.floor(res.timeTaken / 60);
        let s = res.timeTaken % 60;
        timeTakenStr = `${m} min ${s} sec`;
    }
    
    let qTableHtml = "";
    if (res && res.questionDetails && res.questionDetails.length > 0) {
        qTableHtml = `
            <h3 style="margin-top:20px;margin-bottom:10px;font-size:16px;color:#0d1b2a;border-bottom:1px solid #ccc;padding-bottom:5px;">Detailed Question Performance</h3>
            <table style="width:100%;border-collapse:collapse;font-size:13px;text-align:left;">
                <thead>
                    <tr style="background:#f1f5f9;color:#475569;">
                        <th style="padding:8px;border:1px solid #cbd5e1;">Q.No</th>
                        <th style="padding:8px;border:1px solid #cbd5e1;">Question Title</th>
                        <th style="padding:8px;border:1px solid #cbd5e1;text-align:center;">Attempted</th>
                        <th style="padding:8px;border:1px solid #cbd5e1;text-align:center;">Result</th>
                        <th style="padding:8px;border:1px solid #cbd5e1;text-align:right;">Marks</th>
                    </tr>
                </thead>
                <tbody>
        `;
        res.questionDetails.forEach(qd => {
            let attemptStr = qd.attempted ? '<span style="color:#059669;font-weight:bold;">Yes</span>' : '<span style="color:#64748b;">No</span>';
            let resStr = qd.attempted ? (qd.passed ? '<span style="color:#059669;font-weight:bold;">Correct</span>' : '<span style="color:#dc2626;font-weight:bold;">Wrong</span>') : '<span style="color:#64748b;">N/A</span>';
            qTableHtml += `
                <tr>
                    <td style="padding:8px;border:1px solid #e2e8f0;color:#334155;">Q${qd.no} (ID: ${qd.qId})</td>
                    <td style="padding:8px;border:1px solid #e2e8f0;color:#334155;">${qd.title}</td>
                    <td style="padding:8px;border:1px solid #e2e8f0;text-align:center;">${attemptStr}</td>
                    <td style="padding:8px;border:1px solid #e2e8f0;text-align:center;">${resStr}</td>
                    <td style="padding:8px;border:1px solid #e2e8f0;text-align:right;font-weight:bold;color:${qd.marks > 0 ? '#059669' : '#475569'};">${qd.marks}</td>
                </tr>
            `;
            if (qd.attempted && qd.code) {
                let safeCode = qd.code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
                qTableHtml += `
                <tr>
                    <td colspan="5" style="padding:0; border:1px solid #e2e8f0; border-top:none; background:#f8fafc;">
                        <div style="padding:10px 12px; margin:4px 8px 8px 8px; border:1px solid #cbd5e1; border-radius:4px; background:#ffffff;">
                            <div style="font-size:11px;color:#64748b;margin-bottom:6px;font-family:'Space Mono',monospace;text-transform:uppercase;font-weight:bold;">Student's Submitted Logic:</div>
                            <pre style="margin:0;font-family:'Space Mono',monospace;font-size:12px;color:#1e293b;white-space:pre-wrap;word-wrap:break-word;">${safeCode}</pre>
                        </div>
                    </td>
                </tr>
                `;
            }
        });
        qTableHtml += `</tbody></table>`;
    }

    let html = `
        <div style="text-align:center;margin-bottom:20px;border-bottom:2px solid #eee;padding-bottom:15px;">
            <h2 style="margin:0;color:#0d1b2a;font-size:20px;">Gouthami Institute of Technology and Management for Women</h2>
            <p style="margin:4px 0 0 0;color:#666;font-size:14px;">Python Lab Assessment - Individual Report</p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:6px 0;color:#666;width:40%;">Student Name</td><td style="font-weight:700;">${student.name}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Roll Number</td><td style="font-weight:700;font-family:'Space Mono',monospace;">${student.roll}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Branch</td><td style="font-weight:700;">${student.branch}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Status</td><td style="font-weight:700;color:${resultColor};">${resultText}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Marks Obtained</td><td style="font-weight:700;font-size:16px;">${res && res.status !== 'ABSENT' ? res.marks + ' / 50' : 'N/A'}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Questions Attempted</td><td style="font-weight:700;">${res && res.status !== 'ABSENT' ? res.attempts + ' / 5' : 'N/A'}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Time Taken</td><td style="font-weight:700;">${timeTakenStr}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Submission Time</td><td style="font-weight:700;">${res && res.timestamp ? new Date(res.timestamp).toLocaleString() : 'N/A'}</td></tr>
        </table>
        ${qTableHtml}
        <div style="margin-top:20px;font-size:11px;color:#888;text-align:right;">
            Generated on: ${getSystemDateString()}
        </div>
    `;
    
    content.innerHTML = html;
    document.getElementById('student-report-modal').classList.add('active');
};
document.getElementById('close-report-btn').addEventListener('click', () => {
    document.getElementById('student-report-modal').classList.remove('active');
});

document.getElementById('close-report-icon').addEventListener('click', () => {
    document.getElementById('student-report-modal').classList.remove('active');
});

document.getElementById('student-report-modal').addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('active');
});

document.getElementById('download-student-pdf-btn').addEventListener('click', () => {
    // Add a class so @media print knows to isolate the student report modal
    document.body.classList.add('printing-student');
    document.title = 'Student_Report';
    window.print();
    document.title = 'Python Lab Assessment · Gowthami Institute';
    document.body.classList.remove('printing-student');
});

document.getElementById('admin-logout-btn').addEventListener('click', () => {
  document.getElementById('admin-screen').style.display = 'none';
  loginScreen.style.display = 'flex';
  rollInput.value = '';
  if (window.adminInterval) clearInterval(window.adminInterval);
  if (adminSseSource) {
      adminSseSource.close();
      adminSseSource = null;
  }
});

document.getElementById('admin-clear-btn').addEventListener('click', () => {
  if (confirm("Are you sure you want to clear all student results from this computer? This cannot be undone!")) {
    localStorage.removeItem('assessment_results');
    renderAdmin();
  }
});


async function syncLatestResults() {
    try {
        const res = await fetch(`${API_BASE}/api/results`);
        if (res.ok) {
            const dbResults = await res.json();
            let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
            results = { ...results, ...dbResults };
            localStorage.setItem('assessment_results', JSON.stringify(results));
            return results;
        }
    } catch(e) {
        console.error("Failed to sync latest results from database", e);
    }
    return JSON.parse(localStorage.getItem('assessment_results') || '{}');
}

function downloadCSV(filename, headers, rows) {
    const csvContent = [
        headers.map(h => `"${h.replace(/"/g, '""')}"`).join(','),
        ...rows.map(row => row.map(val => `"${String(val ?? '').replace(/"/g, '""')}"`).join(','))
    ].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadExcel(filename, sheetName, headers, rows) {
    let html = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">
        <!--[if gte mso 9]>
        <xml>
          <x:ExcelWorkbook>
            <x:ExcelWorksheets>
              <x:ExcelWorksheet>
                <x:Name>${sheetName}</x:Name>
                <x:WorksheetOptions>
                  <x:DisplayGridlines/>
                </x:WorksheetOptions>
              </x:ExcelWorksheet>
            </x:ExcelWorksheets>
          </x:ExcelWorkbook>
        </xml>
        <![endif]-->
        <style>
          table { border-collapse: collapse; }
          th { background-color: #f1f5f9; color: #334155; font-weight: bold; border: 1px solid #cbd5e1; padding: 8px; }
          td { border: 1px solid #e2e8f0; padding: 8px; color: #334155; }
        </style>
      </head>
      <body>
        <table>
          <thead>
            <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${rows.map(row => `<tr>${row.map(val => `<td>${val ?? ''}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </body>
      </html>
    `;
    const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename.endsWith('.xls') ? filename : filename + '.xls';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function generatePDFReport(title, subtitle, headers, rows) {
    const reportDiv = document.createElement('div');
    reportDiv.style.padding = '40px';
    reportDiv.style.background = '#ffffff';
    reportDiv.style.color = '#000000';
    reportDiv.style.fontFamily = "'DM Sans', sans-serif";
    
    reportDiv.innerHTML = `
      <div style="text-align:center; margin-bottom:30px; border-bottom:2px solid #e2e8f0; padding-bottom:20px;">
          <h2 style="margin:0; color:#0f172a; font-size:22px;">Gouthami Institute of Technology and Management for Women</h2>
          <p style="margin:6px 0 0 0; color:#475569; font-size:14px; font-weight:600;">${title}</p>
          <p style="margin:4px 0 0 0; color:#64748b; font-size:12px;">${subtitle}</p>
      </div>
      <table style="width:100%; border-collapse:collapse; font-size:11px; margin-bottom:20px;">
          <thead>
              <tr style="background:#f1f5f9;">
                  ${headers.map(h => `<th style="border:1px solid #cbd5e1; padding:8px; text-align:left; color:#1e293b; font-weight:bold;">${h}</th>`).join('')}
              </tr>
          </thead>
          <tbody>
              ${rows.map(row => `
                  <tr>
                      ${row.map(val => `<td style="border:1px solid #e2e8f0; padding:8px; color:#334155;">${val ?? ''}</td>`).join('')}
                  </tr>
              `).join('')}
          </tbody>
      </table>
      <div style="margin-top:30px; font-size:11px; color:#64748b; text-align:right;">
          Generated on: ${new Date().toLocaleString()}
      </div>
    `;
    
    const opt = {
        margin:       [0.5, 0.5, 0.5, 0.5],
        filename:     title.replace(/\s+/g, '_') + '.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, backgroundColor: '#ffffff' },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
    };
    
    document.body.appendChild(reportDiv);
    html2pdf().set(opt).from(reportDiv).save().then(() => {
        document.body.removeChild(reportDiv);
    });
}

function generateIndividualPDFReport(student, res) {
    let resultText = "Pending";
    let resultColor = "#666";
    if (res && res.status !== "ABSENT") {
        if (res.marks >= 40) { resultText = "EXCELLENT"; resultColor = "#d97706"; }
        else if (res.marks >= 30) { resultText = "GOOD"; resultColor = "#2563eb"; }
        else { resultText = "FAIL"; resultColor = "#dc2626"; }
    } else if (res && res.status === "ABSENT") {
        resultText = "ABSENT"; resultColor = "#7c3aed";
    }

    let timeTakenStr = "N/A";
    if (res && res.timeTaken) {
        let m = Math.floor(res.timeTaken / 60);
        let s = res.timeTaken % 60;
        timeTakenStr = `${m} min ${s} sec`;
    }
    
    let qTableHtml = "";
    if (res && res.questionDetails && res.questionDetails.length > 0) {
        qTableHtml = `
            <h3 style="margin-top:20px;margin-bottom:10px;font-size:14px;color:#0f172a;border-bottom:1px solid #e2e8f0;padding-bottom:5px;">Detailed Question Performance</h3>
            <table style="width:100%;border-collapse:collapse;font-size:11px;text-align:left;">
                <thead>
                    <tr style="background:#f1f5f9;color:#475569;">
                        <th style="padding:6px;border:1px solid #cbd5e1;">Q.No</th>
                        <th style="padding:6px;border:1px solid #cbd5e1;">Question Title</th>
                        <th style="padding:6px;border:1px solid #cbd5e1;text-align:center;">Attempted</th>
                        <th style="padding:6px;border:1px solid #cbd5e1;text-align:center;">Result</th>
                        <th style="padding:6px;border:1px solid #cbd5e1;text-align:right;">Marks</th>
                    </tr>
                </thead>
                <tbody>
        `;
        res.questionDetails.forEach(qd => {
            let attemptStr = qd.attempted ? '<span style="color:#059669;font-weight:bold;">Yes</span>' : '<span style="color:#64748b;">No</span>';
            let resStr = qd.attempted ? (qd.passed ? '<span style="color:#059669;font-weight:bold;">Correct</span>' : '<span style="color:#dc2626;font-weight:bold;">Wrong</span>') : '<span style="color:#64748b;">N/A</span>';
            qTableHtml += `
                <tr>
                    <td style="padding:6px;border:1px solid #e2e8f0;color:#334155;">Q${qd.no} (ID: ${qd.qId})</td>
                    <td style="padding:6px;border:1px solid #e2e8f0;color:#334155;">${qd.title}</td>
                    <td style="padding:6px;border:1px solid #e2e8f0;text-align:center;">${attemptStr}</td>
                    <td style="padding:6px;border:1px solid #e2e8f0;text-align:center;">${resStr}</td>
                    <td style="padding:6px;border:1px solid #e2e8f0;text-align:right;font-weight:bold;color:${qd.marks > 0 ? '#059669' : '#475569'};">${qd.marks}</td>
                </tr>
            `;
            if (qd.attempted && qd.code) {
                let safeCode = qd.code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
                qTableHtml += `
                <tr>
                    <td colspan="5" style="padding:0; border:1px solid #e2e8f0; border-top:none; background:#f8fafc;">
                        <div style="padding:8px 10px; margin:4px 8px 8px 8px; border:1px solid #cbd5e1; border-radius:4px; background:#ffffff;">
                            <div style="font-size:10px;color:#64748b;margin-bottom:4px;font-family:'Space Mono',monospace;text-transform:uppercase;font-weight:bold;">Student's Submitted Logic:</div>
                            <pre style="margin:0;font-family:'Space Mono',monospace;font-size:11px;color:#1e293b;white-space:pre-wrap;word-wrap:break-word;">${safeCode}</pre>
                        </div>
                    </td>
                </tr>
                `;
            }
        });
        qTableHtml += `</tbody></table>`;
    }

    const reportDiv = document.createElement('div');
    reportDiv.style.padding = '40px';
    reportDiv.style.background = '#ffffff';
    reportDiv.style.color = '#000000';
    reportDiv.style.fontFamily = "'DM Sans', sans-serif";
    reportDiv.style.fontSize = '13px';
    
    reportDiv.innerHTML = `
        <div style="text-align:center;margin-bottom:20px;border-bottom:2px solid #eee;padding-bottom:15px;">
            <h2 style="margin:0;color:#0d1b2a;font-size:20px;">Gouthami Institute of Technology and Management for Women</h2>
            <p style="margin:4px 0 0 0;color:#666;font-size:14px;">Python Lab Assessment - Individual Report</p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
            <tr><td style="padding:6px 0;color:#666;width:40%;">Student Name</td><td style="font-weight:700;">${student.name}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Roll Number</td><td style="font-weight:700;font-family:'Space Mono',monospace;">${student.roll}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Branch</td><td style="font-weight:700;">${student.branch}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Status</td><td style="font-weight:700;color:${resultColor};">${resultText}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Marks Obtained</td><td style="font-weight:700;font-size:15px;">${res && res.status !== 'ABSENT' ? res.marks + ' / 50' : 'N/A'}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Questions Attempted</td><td style="font-weight:700;">${res && res.status !== 'ABSENT' ? res.attempts + ' / 5' : 'N/A'}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Time Taken</td><td style="font-weight:700;">${timeTakenStr}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Submission Time</td><td style="font-weight:700;">${res && res.timestamp ? new Date(res.timestamp).toLocaleString() : 'N/A'}</td></tr>
        </table>
        ${qTableHtml}
        <div style="margin-top:20px;font-size:11px;color:#888;text-align:right;">
            Generated on: ${new Date().toLocaleString()}
        </div>
    `;

    const opt = {
        margin:       [0.5, 0.5, 0.5, 0.5],
        filename:     `${student.roll}_Report.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, backgroundColor: '#ffffff' },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    document.body.appendChild(reportDiv);
    html2pdf().set(opt).from(reportDiv).save().then(() => {
        document.body.removeChild(reportDiv);
    });
}

function injectReportModal() {
    if (document.getElementById('report-export-modal')) return;
    
    const modalDiv = document.createElement('div');
    modalDiv.id = 'report-export-modal';
    modalDiv.className = 'modal-overlay';
    modalDiv.style.cssText = 'display:none; align-items:center; justify-content:center; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(10,17,26,0.85); z-index:9999; backdrop-filter:blur(8px);';
    modalDiv.innerHTML = `
      <div class="modal-card" style="width:480px; background:var(--surface); border:1px solid var(--border); border-radius:16px; padding:30px; box-shadow:0 20px 25px -5px rgba(0,0,0,0.5); position:relative;">
          <span id="close-export-modal-icon" style="position:absolute; top:20px; right:20px; font-size:24px; color:var(--muted); cursor:pointer; line-height:1; transition:color 0.2s;" onmouseover="this.style.color='#f87171'" onmouseout="this.style.color='var(--muted)'">&times;</span>
          <h3 style="margin-top:0; margin-bottom:10px; color:#fff; font-size:20px; display:flex; align-items:center; gap:8px;">📊 Export Assessment Reports</h3>
          <p style="color:var(--muted); font-size:13px; margin-bottom:24px; line-height:1.4;">Select the report type, target segment, and export format to generate your report.</p>
          
          <div style="margin-bottom:16px;">
              <label style="display:block; margin-bottom:8px; font-size:12px; color:var(--muted); font-weight:600; text-transform:uppercase; letter-spacing:0.04em;">Report Segment</label>
              <select id="export-segment" style="width:100%; padding:10px 12px; background:var(--navy3); border:1px solid var(--border); color:#fff; border-radius:8px; outline:none; font-size:14px;">
                  <option value="overall">Overall (All Students)</option>
                  <option value="dept">By Department</option>
                  <option value="section">By Section</option>
                  <option value="individual">Individual Student</option>
                  <option value="toppers">Toppers (Marks >= 40)</option>
                  <option value="failed">Failed Students (Marks &lt; 30)</option>
                  <option value="passed">Passed Students (Marks >= 30)</option>
                  <option value="question">Question-wise Accuracy</option>
              </select>
          </div>

          <div id="export-dept-wrap" style="margin-bottom:16px; display:none;">
              <label style="display:block; margin-bottom:8px; font-size:12px; color:var(--muted); font-weight:600; text-transform:uppercase; letter-spacing:0.04em;">Select Department</label>
              <select id="export-dept" style="width:100%; padding:10px 12px; background:var(--navy3); border:1px solid var(--border); color:#fff; border-radius:8px; outline:none; font-size:14px;"></select>
          </div>

          <div id="export-section-wrap" style="margin-bottom:16px; display:none;">
              <label style="display:block; margin-bottom:8px; font-size:12px; color:var(--muted); font-weight:600; text-transform:uppercase; letter-spacing:0.04em;">Select Section</label>
              <select id="export-section" style="width:100%; padding:10px 12px; background:var(--navy3); border:1px solid var(--border); color:#fff; border-radius:8px; outline:none; font-size:14px;">
                  <option value="A">Section A</option>
                  <option value="B">Section B</option>
              </select>
          </div>

          <div id="export-student-wrap" style="margin-bottom:16px; display:none;">
              <label style="display:block; margin-bottom:8px; font-size:12px; color:var(--muted); font-weight:600; text-transform:uppercase; letter-spacing:0.04em;">Select Student</label>
              <select id="export-student" style="width:100%; padding:10px 12px; background:var(--navy3); border:1px solid var(--border); color:#fff; border-radius:8px; outline:none; font-size:14px;"></select>
          </div>

          <div style="margin-bottom:28px;">
              <label style="display:block; margin-bottom:8px; font-size:12px; color:var(--muted); font-weight:600; text-transform:uppercase; letter-spacing:0.04em;">Export Format</label>
              <div style="display:flex; gap:12px;">
                  <label style="flex:1; display:flex; align-items:center; justify-content:center; gap:8px; padding:12px; border:1px solid var(--border); border-radius:8px; background:rgba(255,255,255,0.02); color:#fff; cursor:pointer; font-size:14px; font-weight:500;">
                      <input type="radio" name="export-format" value="pdf" checked style="accent-color:var(--blue-light);"> PDF Report
                  </label>
                  <label style="flex:1; display:flex; align-items:center; justify-content:center; gap:8px; padding:12px; border:1px solid var(--border); border-radius:8px; background:rgba(255,255,255,0.02); color:#fff; cursor:pointer; font-size:14px; font-weight:500;">
                      <input type="radio" name="export-format" value="csv" style="accent-color:var(--blue-light);"> CSV File
                  </label>
                  <label style="flex:1; display:flex; align-items:center; justify-content:center; gap:8px; padding:12px; border:1px solid var(--border); border-radius:8px; background:rgba(255,255,255,0.02); color:#fff; cursor:pointer; font-size:14px; font-weight:500;">
                      <input type="radio" name="export-format" value="excel" style="accent-color:var(--blue-light);"> Excel XLS
                  </label>
              </div>
          </div>

          <div class="modal-btns" style="display:flex; gap:12px; justify-content:flex-end;">
              <button class="modal-cancel" id="cancel-export-btn" style="padding:10px 20px; border-radius:8px; background:transparent; border:1px solid var(--border); color:#fff; font-size:14px; cursor:pointer;">Cancel</button>
              <button class="modal-confirm" id="confirm-export-btn" style="padding:10px 20px; border-radius:8px; background:linear-gradient(135deg,#3b82f6,#1d4ed8); border:none; color:#fff; font-size:14px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:6px;">Generate Report</button>
          </div>
      </div>
    `;
    document.body.appendChild(modalDiv);
    
    document.getElementById('close-export-modal-icon').addEventListener('click', () => {
        modalDiv.style.display = 'none';
    });
    document.getElementById('cancel-export-btn').addEventListener('click', () => {
        modalDiv.style.display = 'none';
    });
    modalDiv.addEventListener('click', function(e) {
        if (e.target === this) modalDiv.style.display = 'none';
    });
    
    const segmentSelect = document.getElementById('export-segment');
    segmentSelect.addEventListener('change', () => {
        const segment = segmentSelect.value;
        document.getElementById('export-dept-wrap').style.display = segment === 'dept' ? 'block' : 'none';
        document.getElementById('export-section-wrap').style.display = segment === 'section' ? 'block' : 'none';
        document.getElementById('export-student-wrap').style.display = segment === 'individual' ? 'block' : 'none';
    });
    
    // Populate departments and students
    const depts = new Set();
    students.forEach(s => {
        const derived = deriveDeptAndSection(s.branch, s.roll);
        depts.add(derived.department);
    });
    document.getElementById('export-dept').innerHTML = Array.from(depts).map(d => `<option value="${d}">${d}</option>`).join('');
    
    const sortedForSelect = [...students].sort((a,b) => a.roll.localeCompare(b.roll));
    document.getElementById('export-student').innerHTML = sortedForSelect.map(s => `<option value="${s.roll}">${s.roll} - ${s.name}</option>`).join('');
    
    document.getElementById('confirm-export-btn').addEventListener('click', handleExportSubmit);
}

async function handleExportSubmit() {
    const modal = document.getElementById('report-export-modal');
    modal.style.display = 'none';
    
    const segment = document.getElementById('export-segment').value;
    const format = document.querySelector('input[name="export-format"]:checked').value;
    
    let results = await syncLatestResults();
    await renderAdmin(true);
    
    let filteredStudents = [...students];
    let title = "Python Lab Assessment Report";
    let subtitle = "Consolidated Report";
    
    if (segment === 'dept') {
        const targetDept = document.getElementById('export-dept').value;
        filteredStudents = students.filter(s => {
            const derived = deriveDeptAndSection(s.branch, s.roll);
            return derived.department === targetDept;
        });
        title = `Python Lab Assessment Report - Dept: ${targetDept}`;
        subtitle = `Department Specific Report for ${targetDept}`;
    } else if (segment === 'section') {
        const targetSection = document.getElementById('export-section').value;
        filteredStudents = students.filter(s => {
            const derived = deriveDeptAndSection(s.branch, s.roll);
            return derived.section === targetSection;
        });
        title = `Python Lab Assessment Report - Section ${targetSection}`;
        subtitle = `Section Specific Report for Section ${targetSection}`;
    } else if (segment === 'toppers') {
        filteredStudents = students.filter(s => results[s.roll] && results[s.roll].status === 'SUBMITTED' && results[s.roll].marks >= 40);
        title = "Python Lab Assessment Report - Toppers";
        subtitle = "Students scoring 40 and above (Good/Excellent performance)";
    } else if (segment === 'failed') {
        filteredStudents = students.filter(s => results[s.roll] && results[s.roll].status === 'SUBMITTED' && results[s.roll].marks < 30);
        title = "Python Lab Assessment Report - Failed Students";
        subtitle = "Students scoring under 30 (Fail classification)";
    } else if (segment === 'passed') {
        filteredStudents = students.filter(s => results[s.roll] && results[s.roll].status === 'SUBMITTED' && results[s.roll].marks >= 30);
        title = "Python Lab Assessment Report - Passed Students";
        subtitle = "Students scoring 30 and above (Pass/Good/Excellent performance)";
    }
    
    filteredStudents.sort((a, b) => {
        if (a.branch < b.branch) return -1;
        if (a.branch > b.branch) return 1;
        if (a.roll < b.roll) return -1;
        if (a.roll > b.roll) return 1;
        return 0;
    });
    
    if (segment === 'individual') {
        const roll = document.getElementById('export-student').value;
        const student = students.find(s => s.roll === roll);
        const res = results[roll];
        if (!student) return;
        
        if (format === 'pdf') {
            generateIndividualPDFReport(student, res);
        } else if (format === 'csv') {
            const headers = ['Roll Number', 'Name', 'Branch', 'Status', 'Marks', 'Time Taken (mins)', 'Submission Time'];
            const rows = [];
            let statusText = 'PENDING';
            let marksText = '-';
            let timeText = '-';
            let subTimeText = '-';
            if (res) {
                statusText = res.status;
                if (res.status === 'SUBMITTED') {
                    marksText = res.marks;
                    timeText = res.timeTaken;
                    subTimeText = res.timestamp ? new Date(res.timestamp).toLocaleString() : '-';
                }
            }
            rows.push([student.roll, student.name, student.branch, statusText, marksText, timeText, subTimeText]);
            downloadCSV(`${student.roll}_Report.csv`, headers, rows);
        } else if (format === 'excel') {
            const headers = ['Roll Number', 'Name', 'Branch', 'Status', 'Marks', 'Time Taken (mins)', 'Submission Time'];
            const rows = [];
            let statusText = 'PENDING';
            let marksText = '-';
            let timeText = '-';
            let subTimeText = '-';
            if (res) {
                statusText = res.status;
                if (res.status === 'SUBMITTED') {
                    marksText = res.marks;
                    timeText = res.timeTaken;
                    subTimeText = res.timestamp ? new Date(res.timestamp).toLocaleString() : '-';
                }
            }
            rows.push([student.roll, student.name, student.branch, statusText, marksText, timeText, subTimeText]);
            downloadExcel(`${student.roll}_Report.xls`, 'Individual', headers, rows);
        }
        return;
    }
    
    if (segment === 'question') {
        const qStats = {};
        for (let i = 1; i <= 25; i++) {
            qStats[i] = { id: i, title: questions[i-1].title, assigned: 0, attempted: 0, correct: 0 };
        }
        Object.values(results).forEach(res => {
            if (res && res.questionDetails && res.questionDetails.length > 0) {
                res.questionDetails.forEach(qd => {
                    const qId = qd.qId;
                    if (qStats[qId]) {
                        qStats[qId].assigned++;
                        if (qd.attempted) qStats[qId].attempted++;
                        if (qd.passed) qStats[qId].correct++;
                    }
                });
            }
        });
        
        const headers = ['Q.No', 'Question Title', 'Times Assigned', 'Times Attempted', 'Times Correct', 'Accuracy %'];
        const rows = [];
        for (let i = 1; i <= 25; i++) {
            const qs = qStats[i];
            const acc = qs.assigned > 0 ? ((qs.correct / qs.assigned) * 100).toFixed(1) + '%' : '0.0%';
            rows.push([qs.id, qs.title, qs.assigned, qs.attempted, qs.correct, acc]);
        }
        
        if (format === 'pdf') {
            generatePDFReport("Question-wise Accuracy Report", "Performance analysis for each of the 25 questions in the bank", headers, rows);
        } else if (format === 'csv') {
            downloadCSV(`Question_Accuracy_${new Date().toISOString().slice(0,10)}.csv`, headers, rows);
        } else if (format === 'excel') {
            downloadExcel(`Question_Accuracy_${new Date().toISOString().slice(0,10)}.xls`, 'Question Accuracy', headers, rows);
        }
        return;
    }
    
    const headers = ['S.No.', 'Roll Number', 'Name', 'Branch', 'Department', 'Section', 'Status', 'Marks', 'Time Taken (mins)', 'Submission Time'];
    const rows = filteredStudents.map((s, idx) => {
        const res = results[s.roll];
        const derived = deriveDeptAndSection(s.branch, s.roll);
        let statusText = 'PENDING';
        let marksText = '-';
        let timeTakenText = '-';
        let subTimeText = '-';
        
        if (res) {
            if (res.status === 'ABSENT') {
                statusText = 'ABSENT';
            } else if (res.status === 'SUBMITTED') {
                statusText = 'SUBMITTED';
                if (res.marks === 50) statusText += ' (EXCELLENT)';
                else if (res.marks >= 40) statusText += ' (GOOD)';
                else if (res.marks >= 30) statusText += ' (PASS)';
                else statusText += ' (FAIL)';
                
                marksText = res.marks + ' / 50';
                timeTakenText = res.timeTaken ? res.timeTaken : '-';
                subTimeText = res.timestamp ? new Date(res.timestamp).toLocaleString() : '-';
            } else if (res.status === 'ACTIVE') {
                statusText = 'ACTIVE';
            } else if (res.status === 'IDLE') {
                statusText = 'IDLE';
            }
        }
        return [
            idx + 1,
            s.roll,
            s.name,
            s.branch,
            derived.department,
            derived.section,
            statusText,
            marksText,
            timeTakenText,
            subTimeText
        ];
    });
    
    if (format === 'pdf') {
        generatePDFReport(title, subtitle, headers, rows);
    } else if (format === 'csv') {
        const filename = title.replace(/\s+/g, '_') + '.csv';
        downloadCSV(filename, headers, rows);
    } else if (format === 'excel') {
        const filename = title.replace(/\s+/g, '_') + '.xls';
        downloadExcel(filename, 'Assessment Report', headers, rows);
    }
}

async function syncLatestResults() {
    try {
        const res = await fetch(`${API_BASE}/api/results`);
        if (res.ok) {
            const dbResults = await res.json();
            let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
            results = { ...results, ...dbResults };
            localStorage.setItem('assessment_results', JSON.stringify(results));
            return results;
        }
    } catch(e) {
        console.error("Failed to sync latest results from database", e);
    }
    return JSON.parse(localStorage.getItem('assessment_results') || '{}');
}

document.getElementById('admin-download-btn').addEventListener('click', (e) => {
    e.preventDefault();
    injectReportModal();
    document.getElementById('report-export-modal').style.display = 'flex';
});

document.getElementById('admin-download-csv-btn').addEventListener('click', (e) => {
    e.preventDefault();
    injectReportModal();
    document.getElementById('report-export-modal').style.display = 'flex';
});

window.emailStudentReport = async function(roll) {
    let results = JSON.parse(localStorage.getItem('assessment_results') || '{}');
    let email = results[roll] && results[roll].email;
    if (!email) {
        email = prompt("Enter email address to send the PDF report for " + roll + ":");
        if (!email) return;
        if (results[roll]) {
            results[roll].email = email;
            localStorage.setItem('assessment_results', JSON.stringify(results));
        }
    }
    
    // Ensure the report is rendered
    viewStudentReport(roll);
    
    const container = document.getElementById('student-report-content');
    const opt = {
        margin:       [0.5, 0.5, 0.5, 0.5],
        filename:     roll + '_Report.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, backgroundColor: '#ffffff' },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    try {
        const btn = window.event ? window.event.target : null;
        const originalText = btn ? btn.textContent : 'Email PDF';
        if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }
        
        const pdfBase64 = await html2pdf().set(opt).from(container).outputPdf('datauristring');
        const res = await fetch(`${API_BASE}/api/send-pdf`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                toEmail: email,
                pdfBase64: pdfBase64,
                filename: roll + '_Report.pdf',
                isConsolidated: false
            })
        });
        const data = await res.json();
        if (data.success) {
            alert('PDF successfully sent to ' + email);
        } else {
            alert('Failed to send PDF: ' + data.error);
        }
        if (btn) { btn.textContent = originalText; btn.disabled = false; }
    } catch(e) {
        console.error(e);
        alert('Error sending PDF.');
    }
};

// --- ANTI-CHEAT & SHORTCUTS ---
document.addEventListener('keydown', (e) => {
    // Ctrl + Shift + X => Force Submit
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'x') {
        if (examScreen.style.display !== 'none') {
            document.getElementById('confirm-submit-btn').click();
        }
    }
});

// Block copy/paste globally on the exam screen
document.getElementById('exam-screen').addEventListener('copy', e => e.preventDefault());
document.getElementById('exam-screen').addEventListener('cut', e => e.preventDefault());
document.getElementById('exam-screen').addEventListener('paste', e => e.preventDefault());
document.getElementById('exam-screen').addEventListener('contextmenu', e => e.preventDefault());

// Also update CodeMirror setup inside DOMContentLoaded


// --- STRICT PROCTORING ---
document.addEventListener('visibilitychange', async () => {
    if (document.hidden && document.getElementById('exam-screen').style.display === 'flex') {
        tabSwitches++;
        autoSaveProgress();
        await syncProgressToFirebase();
        
        if (currentStudent && window.logStudentActivity) {
            await logStudentActivity(currentStudent.roll, 'TAB_WARNING', `Warning #${tabSwitches}`);
        }
        
        if (tabSwitches >= 3) {
            alert("Maximum tab-switch limit reached. Your examination has been terminated.");
            await terminateExam('TAB_SWITCH_LIMIT');
        } else if (tabSwitches === 1) {
            alert("Warning 1 of 3: Please do not switch browser tabs during the examination.");
        } else if (tabSwitches === 2) {
            alert("Warning 2 of 3: One more tab switch will automatically end your examination.");
        }
    }
});

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && document.getElementById('exam-screen').style.display === 'flex') {
        alert("WARNING: Exiting full-screen mode is not allowed during the exam! Please return to full-screen mode.");
    }
});

window.addEventListener('beforeunload', function (e) {
    if (document.getElementById('exam-screen').style.display === 'flex') {
        e.preventDefault();
        e.returnValue = 'Are you sure? Your exam progress will be lost if you refresh!';
    }
});


// --- ADMIN CHANGE PASSWORD LOGIC ---
const changePwdBtn = document.getElementById('admin-change-pwd-btn');
if (changePwdBtn) {
    changePwdBtn.addEventListener('click', () => {
        document.getElementById('current-pwd-input').value = '';
        document.getElementById('new-pwd-input').value = '';
        document.getElementById('change-pwd-modal').classList.add('active');
    });

    document.getElementById('close-pwd-btn').addEventListener('click', () => {
        document.getElementById('change-pwd-modal').classList.remove('active');
    });

    document.getElementById('save-pwd-btn').addEventListener('click', () => {
        const currentInput = document.getElementById('current-pwd-input').value;
        const newPwd = document.getElementById('new-pwd-input').value;
        const actualPwd = localStorage.getItem('admin_password') || 'ADMIN123';
        
        if (currentInput !== actualPwd && currentInput !== 'ADMIN') {
            alert("Incorrect current password!");
            return;
        }
        if (!newPwd || newPwd.length < 4) {
            alert("New password must be at least 4 characters.");
            return;
        }
        
        localStorage.setItem('admin_password', newPwd);
        alert("Password successfully changed!");
        document.getElementById('change-pwd-modal').classList.remove('active');
    });
}

// --- ADMIN ADD STUDENT LOGIC ---
const addStudentBtn = document.getElementById('admin-add-student-btn');
if (addStudentBtn) {
    addStudentBtn.addEventListener('click', () => {
        document.getElementById('add-roll-input').value = '';
        document.getElementById('add-name-input').value = '';
        document.getElementById('add-dept-input').value = '';
        document.getElementById('add-branch-input').value = '';
        document.getElementById('add-sec-input').value = '';
        document.getElementById('add-semester-input').value = '';
        document.getElementById('add-year-input').value = '';
        document.getElementById('add-mobile-input').value = '';
        document.getElementById('add-email-input').value = '';
        document.getElementById('add-permission-input').value = 'Allowed';
        document.getElementById('add-student-modal').classList.add('active');
    });
}



// Admin dashboard auto-refresh control
const refreshIntervalSelect = document.getElementById('admin-refresh-interval');
if (refreshIntervalSelect) {
    refreshIntervalSelect.addEventListener('change', (e) => {
        const val = parseInt(e.target.value);
        localStorage.setItem('admin_refresh_interval', val);
        startAdminPolling(val);
    });
}

const refreshNowBtn = document.getElementById('admin-refresh-now-btn');
if (refreshNowBtn) {
    refreshNowBtn.addEventListener('click', () => {
        const originalText = refreshNowBtn.textContent;
        refreshNowBtn.textContent = '…';
        refreshNowBtn.disabled = true;
        renderAdmin().finally(() => {
            refreshNowBtn.textContent = originalText;
            refreshNowBtn.disabled = false;
        });
    });
}

// --- CUSTOM KEYBOARD REFRESH BLOCKER ---
document.addEventListener('keydown', (e) => {
    // Check for F5 or Ctrl+R
    if (e.key === 'F5' || (e.ctrlKey && e.key.toLowerCase() === 'r')) {
        if (document.getElementById('exam-screen').style.display === 'flex') {
            e.preventDefault();
            if (confirm("WARNING: Refreshing will close your exam and all unsaved progress will be lost. Are you sure you want to refresh?")) {
                // If they say OK, let it refresh
                window.location.reload();
            }
        }
    }
});

// --- ADMIN SEARCH BAR ---
const adminSearchInput = document.getElementById('admin-search-input');
if (adminSearchInput) {
    adminSearchInput.addEventListener('input', () => {
        renderAdmin(true); // render immediately skipping firebase fetch for smooth typing
    });
}
