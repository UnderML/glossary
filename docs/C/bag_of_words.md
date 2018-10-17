## bag of words

Một đại diện của các từ trong một cụm từ hoặc đoạn văn, không phân biệt thứ tự. Ví dụ, túi từ đại diện cho ba cụm từ sau đây giống hệt nhau:

* the dog jumps
* jumps the dog
* dog jumps the

Mỗi từ được ánh xạ tới một chỉ mục trong một vectơ thưa thớt, trong đó vectơ có chỉ mục cho mỗi từ trong từ vựng. Ví dụ, cụm từ con chó nhảy được ánh xạ vào một vector đặc trưng với các giá trị khác 0 tại ba chỉ số tương ứng với các từ, con chó và nhảy. Giá trị khác 0 có thể là bất kỳ điều nào sau đây:

* A 1 để biểu thị sự hiện diện của một từ.

* Số lần số lượng từ xuất hiện trong túi. Ví dụ, nếu cụm từ là con chó maroon là một con chó với lông tơ maroon, sau đó cả hai maroon và chó sẽ được đại diện là 2, trong khi các từ khác sẽ được đại diện là 1.

* Một số giá trị khác, chẳng hạn như lôgarit đếm số lần một từ xuất hiện trong túi.
