---
id: bucketing
title: bucketing
prev: state
---

Converting a (usually continuous) feature into multiple binary features called buckets or bins, typically based on value range. For example, instead of representing temperature as a single continuous floating-point feature, you could chop ranges of temperatures into discrete bins. Given temperature data sensitive to a tenth of a degree, all temperatures between 0.0 and 15.0 degrees could be put into one bin, 15.1 to 30.0 degrees could be a second bin, and 30.1 to 50.0 degrees could be a third bin.

Chuyển đổi tính năng (thường là liên tục) thành nhiều tính năng nhị phân được gọi là buckets hoặc bins, thường dựa trên phạm vi giá trị. Ví dụ, thay vì thể hiện nhiệt độ là một điểm nổi liên tục duy nhất, bạn có thể cắt phạm vi nhiệt độ thành các 'bin' riêng biệt. Do nhiệt độ dữ liệu nhạy cảm với một phần mười của một mức độ, tất cả nhiệt độ từ 0,0 độ đến 15,0 độ có thể được đưa vào một bin, 15,1 độ đến 30,0 độ có thể là một bin thứ hai, và   30,1 độ đến 50,0 độ có thể là một bin thứ ba.

## Code