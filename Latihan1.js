// Berikut contoh script js yang saya asal buat
// Inisialisasi variabel untuk menghitung jumlah item
let count = 0;

const addForm = document.getElementById("addForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const errorMsg = document.querySelector('.required');

// Fungsi untuk menambahkan item ke dalam daftar
function addItem() {
    count++;
    const todo = todoInput.value;
    const row = `
  <tr>
    <th scope="row">${count}</th>
    <td>${todo}</td>
    <td><button class="btn btn-danger btn-sm" onclick="deleteItem(this)">Delete</button></td>
  </tr>
`;
    todoList.insertAdjacentHTML("beforeend", row);
    todoInput.value = "";
}

// Fungsi untuk menghapus item dari daftar
function deleteItem(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Fungsi untuk validasi input todo
function validateTodoInput() {
  const todo = todoInput.value.trim();
  if (todo === "") {
    errorMsg.innerText = "Todo nya masih kosong, ya!";
    return false;
  }
  return true;
}

// Event listener untuk menambahkan item ke dalam daftar
addForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateTodoInput()) {
    addItem();
    errorMsg.innerText = "";
  }
});