package com.example;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.enums.Category;
import com.example.model.Course;
import com.example.model.Lesson;
import com.example.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner init(CourseRepository courseRepository) {
		return args -> {

			courseRepository.deleteAll();

			for (int i = 0; i < 20; i++) {
				Course c = new Course();
				c.setName("Angular " + i);
				c.setCategory(Category.FRONT_END);

				Lesson l = new Lesson();
				l.setName("Introdução");
				l.setYoutubeURL("12345678901");
				l.setCourse(c);

				c.getLessons().add(l);

				Lesson l1 = new Lesson();
				l1.setName("MODULO2");
				l1.setYoutubeURL("1234567890");
				l1.setCourse(c);

				c.getLessons().add(l1);

				courseRepository.save(c);
			}

		};
	}

}
