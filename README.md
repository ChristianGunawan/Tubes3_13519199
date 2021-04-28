# Tugas Besar Strategi Algoritma : Deadline Reminder Assistant 
> Pada tugas kali ini, dibuat sebuah chatbot sederhana yang mengimplementasikan Regular Expression dan String Matching. Chatbot berperan sebagai personal assistant yang membantu user dalam mengarsipkan tugas kuliahnya. Pengarsipan tugas tersebut dilakukan oleh user dengan memasukkan kode matakuliah, topik, tanggal deadline, dan topik daripada tugas tersebut. Selain itu, user juga dapat mengupdate tanggal deadline jika diperlukan, menandai tugas yang telah selesai, melihat seluruh tugas yang ada, dan melihat tugas tertentu pada tanggal, rentang tanggal, beberapa n hari ke depan, beberapa n minggu ke depan, atau hari ini. Pengekstrakan setiap kata kunci tersebut dilakukan oleh RegEx dengan bantuan dari string matching yang diimplementasikan dengan algortima Boyer-Moore.

# link website
https://serobotss.herokuapp.com/


## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

### General info
> Algoritma Boyer Moore atau biasa disebut Algoritma BM adalah algoritma yang melakukan pencarian kata mulai dari indeks terakhir Pattern sampai akhirnya mencapai posisi paling kiri, teknik ini sering dikenal dengan “the looking-glass technique”. Langkah ini berbeda dengan algoritma pencarian string yang serupa (seperti brute force dan Knuth-Morris-Pratt algorithm) yang memulai pencarian kata-kata dari kiri. Mekanisme utama dari algoritma Boyer Moore selain looking-glass technique adalah “the character-jump technique”. Dari namanya saja kita dapat mengartikan bahwa teknik ini dapat melakukan skip/loncat pada beberapa kasus pencocokan string. Algoritma ini menerapkan prinsip akhiran yang baik (good suffix), dimana karakter yang dicari sesuai dengan karakter yang dimilikinya, serta prinsip karakter buruk (bad character), yang jika karakter tidak memiliki kesamaan akan segera diloncati.  Algoritma ini memiliki kompleksitas algoritma O(nm+A) untuk kasus terburuknya. Walaupun kompleksitas algoritma lebih besar jika dibandingkan dengan bruteforce maupun KMP, tetapi algoritma Boyer Moore memiliki kelebihan yang lebih besar jika dibandingkan dengan algoritma lainnya. Algoritma ini dapat mencari string atau pattern pada suatu teks jauh labih cepat untuk variasi karakter yang beragam. Keuntungan inilah yang membuat algoritma ini sering dipakai untuk melakukan string matching karena pada kehidupan sehari-hari karakter yang berada pada suatu teks pasti sangat bervariasi. Kelemahan dari algoritma ini adalah ketika variasi karakter yang dicari tidak beragam seperti karakter binary. 

### Screenshots
![tambah_task](https://github.com/karlsenab7/Tubes3_13519001/blob/main/others/tambah_tugas.png?raw=true)
![task_selesai](https://github.com/karlsenab7/Tubes3_13519001/blob/main/others/task_selesai.png?raw=true)
![task_diundur](https://github.com/karlsenab7/Tubes3_13519001/blob/main/others/tugas_diundur.png?raw=true)
### Technologies
Javascript, HTML, CSS.

# Setup
Buka file ```bot.html``` pada folder ```src```.


### Features
List of features 
* Menambahkan task baru<br>
Untuk menambahkan task baru, pastikan tercantum:<br>
1. Kode matakuliah berformat XXYYYY, dengan X adalah huruf dan Y adalah angka.
2. Kata penting, yang meliputi ```kuis, tubes, tucil, ujian, praktikum```.
3. Topik tugas. Pastikan topik tugas berada setelah kode matakuliah dan sebelum kata "pada".
4. Tanggal yang berformat ```dd/mm/yy```. ```dd/mm/yyyy```, ```tanggal bulan tahun```. Contoh format valid: ```28 Sept 2022```, ```28 September 2022```, ```28/09/22```, ```28/09/2022```.
* Melihat daftar task<br>
Adapun yang dapat ditampilkan:<br>
1. Seluruh task yang sudah tercatat oleh assistant<br>
Contoh perintah yang dapat digunakan: “Apa saja deadline yang dimiliki sejauh ini?” <br>
2. Berdasarkan periode waktu <br>
i. Pada periode tertentu (DATE_1 until DATE_2) Contoh perintah yang dapat digunakan: “Apa saja deadline antara DATE_1 sampai DATE_2?” <br>
ii. N minggu ke depan Contoh perintah yang dapat digunakan: “Deadline N minggu ke depan apa saja?” <br>
iii. N hari ke depan Contoh perintah yang dapat digunakan: “Deadline N hari ke depan apa saja?”<br>
iv. Hari ini Contoh perintah yang dapat digunakan: “Apa saja deadline hari ini?”<br>
 3. Berdasarkan jenis task (kata penting) <br>
i. Sesuai dengan daftar task yang didefinisikan <br>
ii. User dapat melihat daftar task dengan jenis task tertentu <br>
iii. Misalnya: “3 minggu ke depan ada kuis apa saja?”, maka Chatbot akan menampilkan daftar kuis selama 3 minggu kedepan<br>
* Melihat deadline task<br>
 Hanya berlaku untuk task yang bersifat Tugas atau memiliki tenggat waktu, tugas disini meliputi ```tubes``` dan ```tucil```<br>
Misalnya: “Deadline tugas IF2211 itu kapan?”
* Memperbarui task<br>
Untuk memperbarui deadline, pastikan terdapat kata kunci ```diundur``` dan menyebutkan ```id``` tugas terkait beserta tanggal baru.<br>
Misal “Deadline task 2 diundur menjadi 28/04/2021”
* Menghapus finished task
Untuk menyelesaikan suatu tugas, pastikan terdapat kata kunci ```selesai``` atau ```menyelesaikan``` dan menyebutkan ```id``` tugas terkait.<br>
Misal “Saya sudah menyelesaikan task 2”
### Status
Project is finished

### Inspiration
https://informatika.stei.itb.ac.id/~rinaldi.munir/Stmik/2020-2021/Tugas-Besar-3-IF2211-Strategi-Algoritma-2021.pdf 

### Contact
Dibuat oleh :
 - 13519001 - Karlsen Adiyasa Bachtiar
 - 13519199 - Christian Gunawan
 - 13519206 - Muhammad Fawwaz Naabigh

