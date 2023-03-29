// Berikut contoh script js yang saya asal buat
// Inisialisasi variabel untuk menghitung jumlah item
let count = 0;

const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const errorMsg = document.querySelector('.required');

// Fungsi untuk menambahkan item ke dalam daftar
function addItem() {
  count++;
  const todo = todoInput.value.trim();
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
  } else if ([...todoList.children].find(item => item.children[1].innerText === todo)) {
    errorMsg.innerText = "Owalah, Todo sudah ada ternyata!";
    return false;
  }
  return true;
}

// Event listener untuk menambahkan item ke dalam daftar
const addForm = document.getElementById("addForm");
addForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (validateTodoInput()) {
    addItem();
    errorMsg.innerText = "";
  }
});