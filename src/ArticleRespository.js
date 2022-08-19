const mysql = require('mysql');

/**
 * @class ArticleRepository
 * @description ArticleRepository class
 * @param {Object} conn - MySQL connection
 * Cette classe permet de faire des requêtes sur la bdd MySQL sur la table article
 */
class ArticleRepository {
    constructor(db) {
        this.db = db;
    }
    /**
     * Recherche dans la base de données les articles
     * @returns {Promise} Promise contant les articles
     */
    findAll() {
        return this.db.query('SELECT * FROM article');
    }
    /**
     * recherche un article dans la base de données
     * @param {*} id  id de l'article à modifier
     * @returns {Promise} Promise contant l'article
     */
    findById(id) {
        return this.db.query('SELECT * FROM article WHERE id_article = ?', [id]);
    }
    /**
     * ajoute un article dans la base de données
     * @param {*} article  article à ajouter
     * @returns {Promise} Promise contant l'article créé
     */
    insertOne(article) {
        return this.db.query('INSERT INTO (nom_article, prix_achat, volume) VALUES ?, ?, ?', [article.nom_article, article.prix_achat, article.volume]);
    }
    /**
     * @returns {Promise} Promise contant le nombre d'articles
     */
    count() {
        return this.db.query('SELECT COUNT(*) FROM article');
    }
    /**
     * supprime un article de la base de données
     * @param {*} id  id de l'article à supprimer
     * @returns  {Promise} Promise contant le nombre d'articles supprimés
     */
    deleteById(id) {
        return this.db.query('DELETE FROM article WHERE id_article = ?', [id]);
    }   
}