package com.klagu.project.entities;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="recrutations")
public class Recrutations {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private int id;

    @Column(name="PositionName")
    private String positionName;

    @Column(name="startDate")
    private Date startDate;

    @Column(name="endDate")
    private Date endDate;

}
