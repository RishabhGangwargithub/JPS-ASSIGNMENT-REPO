import java.util.TreeMap;
import java.util.*;


public class collectionQ1 {
    public static void main(String[] args){
        TreeMap<Long,String> trees = new TreeMap<>();
        trees.put((long)936541238, "batman");
        trees.put((long)936541668, "Superman");
        trees.put((long)982541238, "spiderman");
        trees.put((long)995841238, "ironman");
        System.out.println(trees.keySet());
        System.out.println(trees.values());
        System.out.println(trees);



    }
    
}