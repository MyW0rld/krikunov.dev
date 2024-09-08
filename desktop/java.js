const row = document.querySelector('.row');
const photos = document.querySelectorAll('.photo');

// Calculate the number of columns
const numColumns = 4;

// Create an array to store the columns
const columns = Array.from({ length: numColumns }, () => []);

// Distribute the photos across the columns
photos.forEach((photo, index) => {
  const columnIndex = index % numColumns;
  columns[columnIndex].push(photo);
});

// Append the photos to the row
columns.forEach((column) => {
  const columnElement = document.createElement('div');
  columnElement.classList.add('column');
  column.forEach((photo) => {
    columnElement.appendChild(photo);
  });
  row.appendChild(columnElement);
});