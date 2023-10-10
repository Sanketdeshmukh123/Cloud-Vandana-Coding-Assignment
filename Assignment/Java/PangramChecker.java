import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine().toLowerCase(); 
        scanner.close();

        boolean isPangram = checkPangram(sentence);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean checkPangram(String sentence) {
        Set<Character> seenLetters = new HashSet<>();
        
        for (char c : sentence.toCharArray()) {
            if (Character.isLetter(c)) {
                seenLetters.add(c);
            }
        }
        
        return seenLetters.size() == 26;
    }
}
