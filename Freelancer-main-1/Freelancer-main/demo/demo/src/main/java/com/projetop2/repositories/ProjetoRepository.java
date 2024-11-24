package com.projetop2.repositories;

/*
Alan Ribeiro do Carmo 10428496
Wendell Rodrigues da Costa 10428555
Jennifer Tondade 10420574
*/

import com.projetop2.entities.Projeto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjetoRepository extends JpaRepository<Projeto, Long> {
}