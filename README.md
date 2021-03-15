# Pi Day Coding Competition 2021

Please find rules of the competition in [RULES.md](https://github.com/Pi-Campus/team_3/blob/main/RULES.md) and APIs quick tutorial and examples in [API.md](https://github.com/Pi-Campus/team_3/blob/main/API.md).


## Try online! No account required

Just go to http://35.152.98.131:8080/


## Source code

There actually are three source files:
- `src/main/java/pichallenge/team3/Team3Application.java`, the Askdata client
- `src/main/resources/templates/home.html`, the app host HTML page
- `src/main/resources/static/assets/app.js`, che chart entry point


## Running

Standard SpingBoot application. Use the provided Intellij (Ultimate) run configuration
named `Team3Application` (uses JDK 8+).


## Deployment

The target host is a Ubuntu instance running a SSH server. Steps to deploy:

- Generate the artifact with `./gradlew bootJar`
- Transfer the file `build/libs/team3-VERSION.jar` with SCP to the target host (`ubuntu@35.152.98.131`, 
  [private key here](https://drive.google.com/file/d/17qXe9xXpH9SDqXi5RNPi6wiKDkXKUH_R/view?usp=sharing))
- In a tmux session named `app` (attach with `tmux a -t app`, detach with CTRL-B + D), run `java -jar team3-VERSION.jar`
