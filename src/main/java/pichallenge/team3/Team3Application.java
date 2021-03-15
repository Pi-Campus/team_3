package pichallenge.team3;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.apache.http.StatusLine;
import org.apache.http.client.fluent.Request;
import org.apache.http.client.fluent.Response;
import org.apache.http.entity.StringEntity;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Arrays;

@SpringBootApplication
public class Team3Application {

    public static void main(String[] args) {
        SpringApplication.run(Team3Application.class, args);
    }

    @Controller
    public static class App {

        @GetMapping({"", "/"})
        public String homePage(@RequestParam(required = false) String q, Model model) throws Exception {
            if (q != null) {
                String nlResp = askData(q);
                model.addAttribute("JSON_DATA", nlResp);
            }
            model.addAttribute("q", q);
            model.addAttribute("examples", Arrays.asList(
                    "Cases in Bergamo by month",
                    "Cases by county",
                    "Cases in New York"
            ));
            return "home";
        }

        public String askData(String q) throws Exception {
            String json = EntityUtils.toString(Request.Post("https://api.askdata.com/security/domain/askdata/oauth/token")
                    .addHeader("Content-Type", "application/x-www-form-urlencoded")
                    .addHeader("Authorization", "Basic ZmVlZDpmZWVk")
                    .bodyForm(
                            new BasicNameValuePair("grant_type", "password"),
                            new BasicNameValuePair("username", "raffaelesgarro@gmail.com"),
                            new BasicNameValuePair("password", "raffaele")
                    )
                    .execute()
                    .returnResponse()
                    .getEntity());

            JsonObject tokenResp = new Gson().fromJson(json, JsonObject.class);

            String token = tokenResp.get("access_token").getAsString();

            StatusLine switchWorkspaceStatusLine = Request.Post("https://api.askdata.com/smartfeed/askdata/workspace/switch")
                    .addHeader("Content-Type", "application/json")
                    .addHeader("Authorization", "Bearer " + token)
                    .body(new StringEntity("{\"agent_slug\": \"pi_day\"}", "UTF-8"))
                    .execute()
                    .returnResponse()
                    .getStatusLine();

            return EntityUtils.toString(Request.Post("https://api.askdata.com/smartinsight/data/nl/result")
                    .addHeader("Content-Type", "application/json")
                    .addHeader("Authorization", "Bearer " + token)
                    .body(new StringEntity("{\"nl\":\"" + q + "\",\"language\":\"en\"}", "UTF-8"))
                    .execute()
                    .returnResponse()
                    .getEntity());
        }
    }

}
