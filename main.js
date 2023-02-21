var showNewTaskFormButton = document.getElementById("showNewTaskFormButton");
var newTaskForm = document.getElementById("newTaskForm");
var newTaskInput = document.getElementById("newTaskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

// Menambahkan event listener pada tombol "Tambah"
showNewTaskFormButton.addEventListener("click", function () {
  // Menampilkan formulir input dan tombol "Add"
  newTaskForm.style.display = "block";
});

// Menambahkan event listener pada tombol "Add"
addButton.addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah perilaku default dari tombol submit pada formulir

  // Mendapatkan nilai input dari pengguna
  var newTask = newTaskInput.value;

  // Membuat elemen li baru untuk tugas baru
  var newTaskElement = document.createElement("li");
  newTaskElement.innerText = newTask;

  // Menambahkan tugas baru ke dalam daftar tugas
  taskList.appendChild(newTaskElement);

  // Menyembunyikan formulir input dan tombol "Add"
  newTaskForm.style.display = "none";

  // Membersihkan nilai input setelah menambahkan tugas baru
  newTaskInput.value = "";
});
