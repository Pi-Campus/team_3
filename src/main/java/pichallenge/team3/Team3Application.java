package pichallenge.team3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class Team3Application {

    public static void main(String[] args) {
        SpringApplication.run(Team3Application.class, args);
    }

    @Controller
    public static class App {

        @GetMapping({"", "/"})
        public String homePage(Model model) {
            model.addAttribute("examples", Arrays.asList("Cases by county", "Cases in New York"));
            return "home";
        }
    }

}
