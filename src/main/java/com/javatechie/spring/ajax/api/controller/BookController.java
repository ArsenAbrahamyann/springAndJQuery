package com.javatechie.spring.ajax.api.controller;

import com.javatechie.spring.ajax.api.dto.Book;
import com.javatechie.spring.ajax.api.dto.ServiceResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
public class BookController {
    List<Book> bookStore = new ArrayList<>();

    @PostMapping("/saveBook")
    public ResponseEntity<ServiceResponse<Book>> addBook(@RequestBody Book book) {
        bookStore.add(book);
        ServiceResponse<Book> response = new ServiceResponse<Book>("success", book);
        return new ResponseEntity<>( response, HttpStatus.OK);
    }

    @GetMapping("/getBooks")
    public ResponseEntity<ServiceResponse<List<Book>>> getAllBooks() {
        ServiceResponse<List<Book>> response = new ServiceResponse<>("success", bookStore);
        return new ResponseEntity<>(response,HttpStatus.OK);
    }
}
