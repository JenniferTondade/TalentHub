package com.projetop2.controllers;

/*
Alan Ribeiro do Carmo 10428496
Wendell Rodrigues da Costa 10428555
Jennifer Tondade 10420574
*/

import com.projetop2.entities.Freelancer;
import com.projetop2.repositories.FreelancerRepository;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


@RestController
@RequestMapping("/api/freelancers")
public class FreelancerController {

    @Autowired
    private FreelancerRepository freelancerRepository;

    @GetMapping()
    public Iterable<Freelancer> readByTitle(@RequestParam(required = false) String nome) {
        if(nome == null) {
            return freelancerRepository.findAll();
        }
        return freelancerRepository.findByNomeContainingIgnoreCase(nome);
    }

    @PostMapping()
    public ResponseEntity<Freelancer> create(@RequestBody Freelancer entity) {
        if(entity.getId() == null || "".equals(entity.getId())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Necessário informar o Id");
        }

        Optional<Freelancer> existe = freelancerRepository.findById(entity.getId());
        if(existe.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Já existe um freelancer com esse Id");
        }

        Freelancer newEntity = freelancerRepository.save(entity);
        return new ResponseEntity<>(newEntity, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Freelancer> readById(@PathVariable String id){
        Optional<Freelancer> resultado = freelancerRepository.findById(id);

        if(resultado.isPresent()){
            return ResponseEntity.ok(resultado.get());
        }

        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Id" + id + "não encontrado");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Freelancer> update(@RequestBody Freelancer newFreelancer, @PathVariable String id) {
        Optional<Freelancer> entity = freelancerRepository.findById(id);

        if(!entity.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        //Se existe altera objeto e salva no banco
        Freelancer freelancer = entity.get();
        freelancer.setNome(newFreelancer.getNome());
        freelancer.setAvaliacao(newFreelancer.getAvaliacao());

        //Devolve novo freelancer
        freelancerRepository.save(freelancer);
        return ResponseEntity.ok(freelancer);
    }

    
    @DeleteMapping("/{id}")
    public ResponseEntity<Freelancer> deleteFreelancer(@PathVariable String id) {
        Optional<Freelancer> entity = freelancerRepository.findById(id);

        if(!entity.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        Freelancer freelancer = entity.get();
        freelancerRepository.delete(freelancer);
        return ResponseEntity.ok(freelancer);
    }

}
