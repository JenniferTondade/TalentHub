package com.projetop2.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

/*
Alan Ribeiro do Carmo 10428496
Wendell Rodrigues da Costa 10428555
Jennifer Tondade 10420574
*/

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Freelancer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String nome;
    private String email;
    private String habilidades;
    private double avaliacao;
    private Long numero;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "projeto_id")
    private Projeto projeto;


}