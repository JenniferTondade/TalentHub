package com.projetop2.controllers;

import com.projetop2.entities.Freelancer;

/*
Alan Ribeiro do Carmo 10428496
Wendell Rodrigues da Costa 10428555
Jennifer Tondade 10420574
*/

import com.projetop2.entities.Projeto;
import com.projetop2.repositories.FreelancerRepository;
import com.projetop2.repositories.ProjetoRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/projetos")
public class ProjetoController {

    @Autowired
    private ProjetoRepository projetoRepository;
    @Autowired
    private FreelancerRepository freelarepo;

    @PostMapping()
    public ResponseEntity<Projeto> create(@RequestBody Projeto projeto) {
        Projeto newProjeto = projetoRepository.save(projeto);
        return new ResponseEntity<>(newProjeto, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Projeto> addFreelancer(@RequestBody Long freelancerId, @PathVariable long id) {
        Optional<Freelancer> freelancerEntity = freelarepo.findById(freelancerId);
        if(!freelancerEntity.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Freelancer não existe");
        }

        Optional<Projeto> projetoEntity = projetoRepository.findById(id);
        if(!projetoEntity.isPresent()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Projeto não existe");
        }
        Freelancer freelancer = freelancerEntity.get();
        Projeto projeto = projetoEntity.get();

        projeto.getFreelancers().add(freelancer);
        freelancer.setProjeto(projeto);

        Projeto updatedProjeto = projetoRepository.save(projeto);
        return ResponseEntity.ok(updatedProjeto);
    }


    @GetMapping("/{id}")
    public Iterable<Projeto> listarProjetos() {
        return projetoRepository.findAll();
    }

}
