package com.klagu.project.service;

import com.klagu.project.entities.CustomUserDetials;
import com.klagu.project.entities.User;
import com.klagu.project.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService  implements UserDetailsService {

    @Autowired
    private UsersRepository usersRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<User> userOptional=usersRepository.findByUsername(username);

        userOptional.orElseThrow(()->new UsernameNotFoundException("Username not found!"));

        return userOptional.map(CustomUserDetials::new).get();
    }
}
