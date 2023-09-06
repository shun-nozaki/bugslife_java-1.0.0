package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

import com.example.model.Shop;

public interface ShopRepository extends JpaRepository<Shop, Long> {

	@Query("SELECT s FROM Shop s WHERE LOWER(s.name) LIKE %:name%")
	List<Shop> findShopsByName(String name);
}
