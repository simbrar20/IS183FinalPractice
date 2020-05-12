import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  docs: Object;
  showBookDocs: boolean;
  showUserDocs: boolean;
  showBeverageDocs: boolean;
  constructor() { }

  ngOnInit() {
    this.docs = {
      books: [],
      users: [],
      beverages: [],
    }
    this.toggle('toggleBooks');

    this.docs['books'] = [
      {
        description: 'Get a list of books',
        method: 'GET',
        endpoint: 'http://staging-book-api.us-west-1.elasticbeanstalk.com/api/v1/book',
        payload: 'none',
        params: 'none',
        response: [{
          'id': 1,
          'title': 'Book1',
          'author': 'Michael',
          'genre': 'kids',
          'image_url': 'https://www.abebooks.com/images/books/iconic-childrens-books/wholes/cithds2.jpg',
          'read': true,
          'book_type_id': null,
          'active': true,
          'created_at': '2017-05-17T00:00:00.000Z',
          'updated_at': '2017-05-17T00:00:00.000Z',
          'deleted_at': null
        },
        {
          'id': 2,
          'title': 'Book2',
          'author': 'Chris',
          'genre': 'Novel',
          'read': true,
          'image_url': 'https://www.abebooks.com/images/books/iconic-childrens-books/wholes/cithds2.jpg',
          'book_type_id': null,
          'active': true,
          'created_at': '2017-05-17T00:00:00.000Z',
          'updated_at': '2017-05-17T00:00:00.000Z',
          'deleted_at': null
        },
        {
          'id': 3,
          'title': 'Book3',
          'author': 'Alan',
          'genre': 'Fiction',
          'image_url': 'https://www.abebooks.com/images/books/iconic-childrens-books/wholes/cithds2.jpg',
          'read': true,
          'book_type_id': null,
          'active': true,
          'created_at': '2017-05-17T00:00:00.000Z',
          'updated_at': '2017-05-17T00:00:00.000Z',
          'deleted_at': null
        }]
      },
      {
        description: 'Get a single book',
        method: 'GET',
        endpoint: 'http://staging-book-api.us-west-1.elasticbeanstalk.com/api/v1/book/id/<id>',
        payload: 'none',
        params: 'id',
        response: {
          'id': 23,
          'title': 'Book4',
          'author': 'Michael',
          'genre': 'kids',
          'read': true,
          'image_url': 'https://www.abebooks.com/images/books/iconic-childrens-books/wholes/cithds2.jpg',
          'book_type_id': null,
          'active': true,
          'created_at': '2017-05-17T00:00:00.000Z',
          'updated_at': '2017-05-17T00:00:00.000Z',
          'deleted_at': null
        }
      },
      {
        description: 'Update a book',
        method: 'PUT',
        endpoint: 'http://staging-book-api.us-west-1.elasticbeanstalk.com/api/v1/book/id/<id>',
        payload: {
          'title': 'some title',
          'genre': 'some genre',
          'author': 'some author',
          'image_url': 'https://www.abebooks.com/images/books/iconic-childrens-books/wholes/cithds2.jpg',
        },
        params: 'id',
        response: {
          'id': 23,
          'title': 'some title',
          'author': 'some author',
          'genre': 'some genre',
          'image_url': 'https://www.abebooks.com/images/books/iconic-childrens-books/wholes/cithds2.jpg',
          'read': true,
          'book_type_id': null,
          'active': true,
          'created_at': '2017-05-17T00:00:00.000Z',
          'updated_at': '2017-05-17T00:00:00.000Z',
          'deleted_at': null
        }
      },
      {
        description: 'Create a book',
        method: 'POST',
        endpoint: 'http://staging-book-api.us-west-1.elasticbeanstalk.com/api/v1/book',
        payload: {
          'title': 'some title',
          'genre': 'some genre',
          'author': 'some author',
          'image_url': 'https://www.abebooks.com/images/books/iconic-childrens-books/wholes/cithds2.jpg',
        },
        params: 'none',
        response: {
          'id': 34,
          'title': 'some title',
          'author': 'some author',
          'genre': 'some genre',
          'image_url': 'https://www.abebooks.com/images/books/iconic-childrens-books/wholes/cithds2.jpg',
          'read': true,
          'book_type_id': null,
          'active': true,
          'created_at': '2017-05-17T00:00:00.000Z',
          'updated_at': '2017-05-17T00:00:00.000Z',
          'deleted_at': null
        }
      },
      {
        description: 'Delete a book',
        method: 'DELETE',
        endpoint: 'http://staging-book-api.us-west-1.elasticbeanstalk.com/api/v1/book/id/<id>',
        payload: 'none',
        params: 'id',
        response: {
          'message': 'delete success'
        }
      }
    ];

    this.docs['beverages'] = [
      {
        description: 'Get a list of beverages',
        method: 'GET',
        endpoint: 'http://staging-book-api.us-west-1.elasticbeanstalk.com/api/v1/tank',
        payload: 'none',
        params: 'none',
        response: [
          {
            'id': 2,
            'beverage_name': 'Jameson',
            'serial_number': '345-00-142',
            'volume': 80,
            'alcohol level': 20,
            'price': 100,
            'user_id': null,
            'active': true,
            'created_at': '2017-05-18T00:00:00.000Z',
            'updated_at': '2017-05-18T00:00:00.000Z',
            'deleted_at': null
          },
          {
            'id': 3,
            'beverage_name': 'Absolut',
            'serial_number': '763-900-123',
            'volume': 1.75,
            'alcohol level': 40,
            'price': 30,
            'user_id': null,
            'active': true,
            'created_at': '2017-05-18T00:00:00.000Z',
            'updated_at': '2017-05-18T00:00:00.000Z',
            'deleted_at': null
          },
          {
            'id': 4,
            'beverage_name': 'asdf',
            'serial_number': '123-908-765',
            'volume': 1.75,
            'alcohol level': 25,
            'price': 45,
            'user_id': null,
            'active': true,
            'created_at': '2017-05-18T00:00:00.000Z',
            'updated_at': '2017-05-18T00:00:00.000Z',
            'deleted_at': null
          }]
      },
      {
        description: 'Get a single tank',
        method: 'GET',
        endpoint: 'http://staging-book-api.us-west-1.elasticbeanstalk.com/api/v1/tank/id/<id>',
        payload: 'none',
        params: 'id',
        response: {
          'id': 2,
          'tank_name': 'Jameson',
          'serial_number': '456-376-999',
          'volume': 80,
          'user_id': null,
          'active': true,
          'created_at': '2017-05-18T00:00:00.000Z',
          'updated_at': '2017-05-18T00:00:00.000Z',
          'deleted_at': null
        }
      },
      {
        description: 'Update a beverage',
        method: 'PUT',
        endpoint: 'http://staging-book-api.us-west-1.elasticbeanstalk.com/api/v1/tank/id/<id>',
        payload: {
          'beverage_name': 'Pepsi',
          'serial_number': '12345-00-00',
          'liters': 5
        },
        params: 'id',
        response: {
          'id': 2,
          'tank_name': 'Pepsi',
          'serial_number': '12345-00-00',
          'Liters': 5,
          'user_id': null,
          'active': true,
          'created_at': '2017-05-18T00:00:00.000Z',
          'updated_at': '2017-05-18T00:00:00.000Z',
          'deleted_at': null
        }
      },
      {
        description: 'Create a beverage',
        method: 'POST',
        endpoint: 'http://staging-book-api.us-west-1.elasticbeanstalk.com/api/v1/tank',
        payload: {
          'beverage_name': '7-UP',
          'serial_number': '997-665-554',
          'Liters': 2
        },
        params: 'none',
        response: {
          'id': 10,
          'beverage_name': '7-UP',
          'serial_number': '997-665-554',
          'liters': 2,
          'user_id': null,
          'active': true,
          'created_at': '2017-05-18T00:00:00.000Z',
          'updated_at': '2017-05-18T00:00:00.000Z',
          'deleted_at': null
        }
      },
      {
        description: 'Delete a beverage',
        method: 'DELETE',
        endpoint: 'http://staging-book-api.us-west-1.elasticbeanstalk.com/api/v1/tank/id/<id>',
        payload: 'none',
        params: 'id',
        response: {
          'message': 'delete success'
        }
      }
    ];

    this.docs['users'] = [
      {
        description: 'Get a list of users',
        method: 'GET',
        endpoint: 'http://staging-book-api.us-west-1.elasticbeanstalk.com/api/v1/user',
        payload: 'none',
        params: 'none',
        response: [
          {
            'id': 2,
            'email': 'asfd',
            'username': 'asdf',
            'password': null,
            'role': null,
            'image_url': 'http://cdn3-www.dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
            'super_admin': false,
            'is_activated': false,
            'active': true,
            'created_at': '2017-05-18T00:00:00.000Z',
            'updated_at': '2017-05-18T00:00:00.000Z',
            'deleted_at': null
          }
        ]

      },
      {
        description: 'Get a single user',
        method: 'GET',
        endpoint: 'http://staging-book-api.us-west-1.elasticbeanstalk.com/api/v1/user/id/<id>',
        payload: 'none',
        params: 'id',
        response: {
          'id': 2,
          'email': 'asfd',
          'username': 'asdf',
          'password': null,
          'role': null,
          'image_url': 'http://cdn3-www.dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
          'super_admin': false,
          'is_activated': false,
          'active': true,
          'created_at': '2017-05-18T00:00:00.000Z',
          'updated_at': '2017-05-18T00:00:00.000Z',
          'deleted_at': null
        }
      },
      {
        description: 'Update a user',
        method: 'PUT',
        endpoint: 'http://staging-book-api.us-west-1.elasticbeanstalk.com/api/v1/user/id/<id>',
        payload: {
          'email': 'asfdssssssss',
          'username': 'asdf',
          'password': null,
          'role': null,
          'image_url': 'http://cdn3-www.dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
          'super_admin': false,
          'is_activated': false,
          'active': true,
          'created_at': '2017-05-18T00:00:00.000Z',
          'updated_at': '2017-05-18T00:00:00.000Z',
          'deleted_at': null
        },
        params: 'id',
        response: {
          'id': 2,
          'email': 'asfdssssssss',
          'username': 'asdf',
          'password': null,
          'role': null,
          'image_url': 'http://cdn3-www.dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
          'super_admin': false,
          'is_activated': false,
          'active': true,
          'created_at': '2017-05-18T00:00:00.000Z',
          'updated_at': '2017-05-18T00:00:00.000Z',
          'deleted_at': null
        }
      },
      {
        description: 'Create a user',
        method: 'POST',
        endpoint: 'http://staging-book-api.us-west-1.elasticbeanstalk.com/api/v1/user',
        payload: {
          'email': 'lphan@shift3t3ech2.com',
          'username': 'lphan ',
          'image_url': 'http://cdn3-www.dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg'
        },
        params: 'none',
        response: {
          'id': 5,
          'email': 'lphan@shift3t3ech2.com',
          'username': 'lphan',
          'password': null,
          'role': null,
          'image_url': 'http://cdn3-www.dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg',
          'super_admin': false,
          'is_activated': false,
          'active': true,
          'created_at': '2017-05-18T00:00:00.000Z',
          'updated_at': '2017-05-18T00:00:00.000Z',
          'deleted_at': null
        }
      },
      {
        description: 'Delete a user',
        method: 'DELETE',
        endpoint: 'http://staging-book-api.us-west-1.elasticbeanstalk.com/api/v1/user/id/<id>',
        payload: 'none',
        params: 'id',
        response: {
          'message': 'delete success'
        }
      }
    ];

  }

  get(item: string) {
    switch (item) {
      case 'get payload':
        return []
      case '':

    }
  }

  toggle(event) {
    switch (event) {
      case 'toggleBooks':
        this.showBookDocs = true;
        this.showUserDocs = false;
        this.showBeverageDocs = false;
        break;
      case 'toggleUsers':
        this.showUserDocs = true;
        this.showBookDocs = false;
        this.showBeverageDocs = false;
        break;
      case 'toggleBeverages':
        this.showBeverageDocs = true;
        this.showBookDocs = false;
        this.showUserDocs = false;
        break;
      default:
        this.showBookDocs = true;
        this.showUserDocs = false;
        this.showBeverageDocs = false;
        break;
    }
  }

}
