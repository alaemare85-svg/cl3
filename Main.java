import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("ما اسمك؟ ");
            String name = scanner.nextLine().trim();

            if (name.isEmpty()) {
                name = "Al-FHD";
            }

            System.out.println("مرحبًا يا " + name + "! هذا أول برنامج Java لك في Al-fhd.");
        }
    }
}
