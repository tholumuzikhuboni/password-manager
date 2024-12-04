// Elements
const lengthInput = document.getElementById('length');
const output = document.getElementById('output');
const includeUppercase = document.getElementById('includeUppercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const websiteInput = document.getElementById('website');
const generateBtn = document.getElementById('generateBtn');
const saveBtn = document.getElementById('saveBtn');
const passwordList = document.getElementById('passwordList');

// Characters
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?/";

// Load saved passwords
function loadPasswords() {
  const savedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
  passwordList.innerHTML = '';
  savedPasswords.forEach(({ website, password }) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.textContent = `${website}: ${password}`;
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm btn-danger';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
      const newPasswords = savedPasswords.filter(p => p.website !== website || p.password !== password);
      localStorage.setItem('passwords', JSON.stringify(newPasswords));
      loadPasswords();
    };
    li.appendChild(deleteBtn);
    passwordList.appendChild(li);
  });
}

// Generate password
function generatePassword() {
  const length = parseInt(lengthInput.value);
  let chars = lowercase;
  if (includeUppercase.checked) chars += uppercase;
  if (includeNumbers.checked) chars += numbers;
  if (includeSymbols.checked) chars += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  output.value = password;
}

// Save password
function savePassword() {
  const password = output.value;
  const website = websiteInput.value.trim();
  if (!password) return alert('Generate a password first!');
  if (!website) return alert('Please enter a website name!');
  const savedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
  savedPasswords.push({ website, password });
  localStorage.setItem('passwords', JSON.stringify(savedPasswords));
  loadPasswords();
  websiteInput.value = '';
  alert('Password saved successfully!');
}

// Event Listeners
generateBtn.addEventListener('click', generatePassword);
saveBtn.addEventListener('click', savePassword);

// Initial load
loadPasswords();