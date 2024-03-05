package com.yiweizhao.springbootlibrary.dao;

import com.yiweizhao.springbootlibrary.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

}
