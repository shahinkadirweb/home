// Dummy user data with photos
const users = [
  { id: '101', name: 'Shahin Kadir', photo: 'https://via.placeholder.com/40?text=S' },
  { id: '102', name: 'Nadia Rahman', photo: 'https://via.placeholder.com/40?text=N' },
  { id: '103', name: 'Ashik Mahmud', photo: 'https://via.placeholder.com/40?text=A' },
  { id: '104', name: 'Tanvir Islam', photo: 'https://via.placeholder.com/40?text=T' },
];

// Show user cards
function displayUsers(filtered = users) {
  const container = document.getElementById('userList');
  container.innerHTML = '';

  filtered.forEach(user => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card p-3 text-center">
        <img src="${user.photo}" class="rounded-circle mb-2" alt="${user.name}" width="60" height="60">
        <h5>${user.name}</h5>
        <p>ID: ${user.id}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

displayUsers(); // Initial load

// Search function
document.getElementById('searchInput').addEventListener('input', function() {
  const value = this.value.toLowerCase();
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(value) || user.id.includes(value)
  );
  displayUsers(filtered);
});

// Fill dropdowns & show modal
function openRelationModal() {
  const selectA = document.getElementById('userASelect');
  const selectB = document.getElementById('userBSelect');

  selectA.innerHTML = '';
  selectB.innerHTML = '';

  users.forEach(user => {
    const optionA = document.createElement('option');
    optionA.value = user.id;
    optionA.innerHTML = `👤 ${user.name}`;
    selectA.appendChild(optionA);

    const optionB = document.createElement('option');
    optionB.value = user.id;
    optionB.innerHTML = `👤 ${user.name}`;
    selectB.appendChild(optionB);
  });

  document.getElementById('relationDate').valueAsDate = new Date();

  new bootstrap.Modal(document.getElementById('relationModal')).show();
}

// Create relation handler
function createRelation(e) {
  e.preventDefault();

  const userA = document.getElementById('userASelect').value;
  const userB = document.getElementById('userBSelect').value;
  const type = document.getElementById('relationType').value;
  const date = document.getElementById('relationDate').value;

  if (userA === userB) {
    alert("User A and B cannot be the same.");
    return;
  }

  const nameA = users.find(u => u.id === userA)?.name;
  const nameB = users.find(u => u.id === userB)?.name;

  alert(`✅ Relation created:
${nameA} ↔ ${nameB}
Type: ${type}
Date: ${date}`);

  bootstrap.Modal.getInstance(document.getElementById('relationModal')).hide();
}
