package com.projetop2.repositories;

/*
Alan Ribeiro do Carmo 10428496
Wendell Rodrigues da Costa 10428555
Jennifer Tondade 10420574
*/

import com.projetop2.entities.Freelancer;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FreelancerRepository extends JpaRepository<Freelancer, String> {
    public List<Freelancer> findByNomeContainingIgnoreCase(String nome);
}