---
id: bag-of-words
title: bag of words
prev: state
---

A representation of the words in a phrase or passage, irrespective of order. For example, bag of words represents the following three phrases identically:

- the dog jumps
- jumps the dog
- dog jumps the
Each word is mapped to an index in a sparse vector, where the vector has an index for every word in the vocabulary. For example, the phrase the dog jumps is mapped into a feature vector with non-zero values at the three indices corresponding to the words the, dog, and jumps. The non-zero value can be any of the following:

- A 1 to indicate the presence of a word.
- A count of the number of times a word appears in the bag. For example, if the phrase were the maroon dog is a dog with maroon fur, then both maroon and dog would be represented as 2, while the other words would be represented as 1.
- Some other value, such as the logarithm of the count of the number of times a word appears in the bag.

Một đại diện của các từ trong một cụm từ hoặc đoạn văn, không phân biệt thứ tự. Ví dụ, bag of words đại diện cho ba cụm từ sau đây giống hệt nhau: 

- the dog jumps
- jumps the dog
- dog jumps the

Mỗi từ được ánh xạ tới một chỉ mục trong một vectơ thưa, trong đó vectơ có chỉ mục cho mỗi từ trong từ. Ví dụ, cụm từ 'the dog jumps' được ánh xạ vào một vector đặc trưng với các giá trị khác 0 tại ba chỉ số tương ứng với các từ, 'the' 'dog' và 'jump'. Giá trị khác 0 có thể là một trong các giá trị sau đây: 

- Là 1 để biểu thị sự cho sự xuất hiện một từ. 
- Số lần xuất hiện của từ trong một bag. Ví dụ, nếu cụm từ là the 'maroon dog is a dog with maroon fur', sau đó cả hai maroon và dog sẽ được biểu diễn là 2, trong khi các từ khác sẽ được biểu diễn là 1. 
- Một giá trị khác, chẳng hạn như lôgarit của số lần xuất hiện của từ trong bag

## Code