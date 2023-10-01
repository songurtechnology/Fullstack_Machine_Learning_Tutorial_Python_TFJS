import tensorflow as tf
import torch

vector1 = tf.constant([1.0, 2.0, 3.0])
vector2 = torch.tensor([1.0, 2.0, 3.0])


matrix1 = tf.constant([[1.0, 2.0, 3.0], [4.0, 5.0, 6.0]])
matrix2 = torch.tensor([[1.0, 2.0, 3.0], [4.0, 5.0, 6.0]])

print(vector1, "\n", vector2)
print(matrix1, "\n", matrix2)