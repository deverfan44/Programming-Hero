import java.util.Scanner;
class BankAccount{
    String holderName;
    double balance=0;

    BankAccount(String name) {
        holderName = name;
        balance = 0;
    }
    BankAccount(String name, double amount) {
        holderName = name;
        balance = amount;
    }
    void showBalance() {
        System.out.println(balance);
    }
}
public class test{
    public static void main(String[] args) {
        BankAccount user1 = new BankAccount("Erfan");
        BankAccount user2 = new BankAccount("Karim");
        BankAccount user3 = new BankAccount("Rahim",1000);

        user1.showBalance();
        user2.showBalance();
        user3.showBalance();
    }
}