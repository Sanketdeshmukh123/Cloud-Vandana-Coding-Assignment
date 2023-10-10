import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ShuffleArray {
    public static void main(String[] args) {

        //ArrayList with the values (1, 2, 3, 4, 5, 6, 7)
        List<Integer> arrayList = new ArrayList<>();
        for (int i = 1; i <= 7; i++) {
            arrayList.add(i);
        }

        // Shuffling the ArrayList
        Collections.shuffle(arrayList);

        // Printing the shuffled array elements
        for (Integer value : arrayList) {
            System.out.print(value + " ");
        }
    }
}
