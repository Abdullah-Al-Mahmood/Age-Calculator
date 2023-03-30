import java.time.LocalDate;
import java.time.Period;

public class AgeCalculator {

    public static String calculateAge(LocalDate birthDate, LocalDate currentDate) {
        if ((birthDate != null) && (currentDate != null)) {
            return Period.between(birthDate, currentDate).getYears() + " years, " + Period.between(birthDate, currentDate).getMonths() + " months, and " + Period.between(birthDate, currentDate).getDays() + " days old.";
        } else {
            return "Birth date or current date cannot be null.";
        }
    }

}
