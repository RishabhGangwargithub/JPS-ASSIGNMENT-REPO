import java.util.Scanner;

public class Division {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		try {
		System.out.println("Enter the Dividend Value: ");
		int Dividend = sc.nextInt();
		System.out.println("Enter the Divisor Value: ");
		int Divisor =sc.nextInt();
		
		int Result = Dividend/Divisor;
		
		System.out.println("Result is "+Result);
	
		}
		catch (ArithmeticException e)
		{
			
			System.out.println("You Entered '0' in Divisor Section");
			
		}

}
}