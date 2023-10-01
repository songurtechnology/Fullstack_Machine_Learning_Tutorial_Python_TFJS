document.addEventListener('DOMContentLoaded', async () => {
    const tf = window.tf;

    // Create a vector (tensor)
    const vector1 = tf.tensor([1, 2, 3]);

    // Create matrices (tensors)
    const matrix1 = tf.tensor([[1, 2, 3], [4, 5, 6]]);

    // Format the matrix for display
    const formattedMatrix = formatMatrix(matrix1.arraySync());

    // Display the results
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = `
        Vector : [${vector1.dataSync()}]<br>
        Matrix : <br>${formattedMatrix}
    `;
});

function formatMatrix(matrix) {
    const rows = matrix.map(row => `[${row.join(', ')}]`).join(',<br> ');
    return `[${rows}]`;
}
