package jz.cola.deploywithdocker;

import jakarta.websocket.server.PathParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@Slf4j
public class DeployWithDockerApplication {

    public static void main(String[] args) {
        SpringApplication.run(DeployWithDockerApplication.class, args);

        log.info("DeployWithDockerApplication run successful ");
    }

    @RestController
    @RequestMapping("api/v1/hello")
    static class HelloController{
        @GetMapping("/sayHello/{name}")
        public String sayHello(@PathVariable("name") String name){
            return "Hello I am " + name;
        }

        @GetMapping("/start")
        public String start(){
            return "YuanShen QiDong!";
        }
    }



}
