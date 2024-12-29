import java.util.*;

class Result {

    public static List<Integer> breakingRecords(List<Integer> scores) {
        int minCount = 0;
        int maxCount = 0;
        int minScore = scores.get(0);
        int maxScore = scores.get(0);
        
        for (int i = 1; i < scores.size(); i++) {
            if (scores.get(i) > maxScore) {
                maxScore = scores.get(i);
                maxCount++;
            } else if (scores.get(i) < minScore) {
                minScore = scores.get(i);
                minCount++;
            }
        }
        
        return Arrays.asList(maxCount, minCount);
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        List<Integer> scores = new ArrayList<>();
        
        for (int i = 0; i < n; i++) {
            scores.add(scanner.nextInt());
        }
        
        List<Integer> result = Result.breakingRecords(scores);
        System.out.println(result.get(0) + " " + result.get(1));
    }
}
