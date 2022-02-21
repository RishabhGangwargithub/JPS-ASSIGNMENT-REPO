public class InsufficientOperation {
	public  void A4Q2 (int i) {
	int a[]= {0,1,2};
	try {
	
	int Result = 5/a[i];
	
	System.out.println("Result is "+Result);

	}
	catch (ArithmeticException e)
	{
		
		System.out.println("You Entered '0' in Divisor Section");
		e.printStackTrace();
	}
	}
	
	public static void main(String[] args) {
		InsufficientOperation sc = new InsufficientOperation();
		sc.A4Q2(2);
		sc.A4Q2(0);
		
		
		

}
}