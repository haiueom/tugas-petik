// library dari c++
#include <iostream>
using namespace std;

// inisialisasi fariable
int angka1, angka2, hasil;

// function main(utama)
int main(){
	
	// membuat output kalkulator
	cout<<"PERTAMBAHAN"<<endl;
	
	// input angka pertama
	cout<<"Angka pertama        : ";
	cin>>angka1;
	
	// input angka kedua
	cout<<"Angka kedua          : ";
	cin>>angka2;
	
	//menjumlahkan hasil
	hasil = angka1 + angka2;
	
	// menampilkan hasil
	cout<<"Hasil pertambahannya : "<<hasil;
	
}
